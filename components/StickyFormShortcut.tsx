"use client";

import { useEffect, useState } from "react";

export default function StickyFormShortcut() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#register"
      className="fixed bottom-6 right-5 z-40 hidden items-center gap-2 rounded-full bg-brand px-5 py-3 font-body text-xs font-semibold text-white shadow-float transition-transform hover:scale-[1.02] hover:bg-brand-dark lg:flex"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      VIP Register
    </a>
  );
}
