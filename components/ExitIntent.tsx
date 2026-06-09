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
          className="fixed inset-0 z-[60] hidden items-center justify-center bg-black/60 p-6 lg:flex"
          onClick={() => setShow(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-intent-title"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-md rounded-sm bg-brand-deep p-8 text-white shadow-elevated"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-sm text-white/60 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 id="exit-intent-title" className="font-display text-2xl text-white">
              Wait — get your VIP package before the public launch.
            </h2>
            <p className="mt-2 font-body text-sm text-white/80">
              Register now for Bronte Trails townhome floor plans, pricing, and
              platinum access.
            </p>
            <div className="mt-6 rounded-sm bg-white p-5">
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
