"use client";

import { motion } from "framer-motion";

export default function CreatorPromo() {
  const sellerPhone = "919876543210";
  const sellerMessage = encodeURIComponent(
    "Hi! I loved Virinch & Nidhi's interactive wedding invitation. I want to create a similar card for my upcoming event. Please share details!"
  );

  return (
    <footer className="relative py-14 px-4 bg-[#F8F4EC] border-t border-[#E8DFC8] w-full flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full flex flex-col items-center"
      >
        {/* Subtle decorative gold seal */}
        <div className="w-9 h-9 rounded-full bg-[#FAF3E8] border border-[#C9A96E]/50 flex items-center justify-center text-[#B8963E] mb-3 shadow-xs">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>

        <p className="font-cinzel text-base sm:text-lg text-[#4A1521] font-semibold tracking-wide">
          Love This Digital Invitation?
        </p>

        <p className="font-sans text-xs sm:text-sm text-[#6B5D4F] mt-1.5 mb-5 max-w-xs leading-relaxed">
          Get a bespoke, interactive wedding card crafted for your special day.
        </p>

        {/* WhatsApp CTA Pill */}
        <a
          href={`https://wa.me/${sellerPhone}?text=${sellerMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3 rounded-full font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.93.813 2.791.813 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.418-.456-4.887-1.258l-5.613 1.472 1.498-5.467c-.886-1.521-1.398-3.298-1.398-5.187 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
          </svg>
          I Want A Card Like This • WhatsApp
        </a>

        {/* Small copyright / discreet note */}
        <p className="font-sans text-[0.65rem] text-[#9B8D7F] mt-6 tracking-widest uppercase">
          ✦ Interactive Luxury Digital Invitations ✦
        </p>
      </motion.div>
    </footer>
  );
}
