"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/5 bg-white/95 p-3 shadow-float backdrop-blur-md lg:hidden">
      <a href="#register" className="btn-primary flex w-full text-xs">
        Register for VIP Access
      </a>
    </div>
  );
}
