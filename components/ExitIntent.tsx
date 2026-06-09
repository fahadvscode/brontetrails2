"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hasRegisteredLead, LEAD_REGISTERED_EVENT } from "@/lib/form";
import RegisterForm from "./RegisterForm";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (hasRegisteredLead()) {
      setRegistered(true);
    }

    const onRegistered = () => {
      setRegistered(true);
      setShow(false);
    };
    window.addEventListener(LEAD_REGISTERED_EVENT, onRegistered);
    return () => window.removeEventListener(LEAD_REGISTERED_EVENT, onRegistered);
  }, []);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (dismissed || registered) return;
      if (e.clientY <= 0 && window.innerWidth >= 1024) {
        setShow(true);
        setDismissed(true);
      }
    },
    [dismissed, registered],
  );

  useEffect(() => {
    if (registered) return;
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave, registered]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] hidden items-center justify-center bg-ink/50 p-6 backdrop-blur-sm lg:flex"
          onClick={() => setShow(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            className="surface w-full max-w-md overflow-hidden shadow-float"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-brand px-8 py-6 text-white">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
              <h2 id="exit-intent-title" className="font-display text-2xl">
                Before you go — secure VIP access
              </h2>
              <p className="mt-2 font-body text-sm text-white/80">
                Register for Bronte Trails floor plans, pricing, and launch details.
              </p>
            </div>
            <div className="p-6">
              <RegisterForm
                formType="exit-intent"
                onSuccess={() => setTimeout(() => setShow(false), 2000)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
