import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function ContactButton({ label = "Contact Me", onClick }: ContactButtonProps) {
  return (
    <button
      id="contact-me-btn"
      onClick={onClick}
      className="contact-gradient-btn px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest rounded-full cursor-pointer select-none focus:outline-none"
    >
      {label}
    </button>
  );
}
