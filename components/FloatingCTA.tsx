"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-brand-deep p-3 shadow-elevated lg:hidden">
      <a
        href="#register"
        className="btn-primary flex w-full text-xs"
      >
        Register for VIP Access
      </a>
    </div>
  );
}
