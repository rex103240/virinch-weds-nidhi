"use client";

import { motion } from "framer-motion";

export default function LanternRSVP() {
  const primaryPhone = "8003530144";
  const secondaryPhone = "7300337983";
  const sellerPhone = "917976944626";
  const waMessage = encodeURIComponent(
    "Namaste Arvind ji, Heartiest congratulations to Virinch & Nidhi on their wedding! RSVP confirmed."
  );
  const sellerMessage = encodeURIComponent(
    "Hi! I loved Virinch & Nidhi's interactive wedding invitation. I want to create a similar card for my upcoming event. Please share details!"
  );

  return (
    <>
      {/* ── Ornamental Chapter Divider ── */}
      <div className="w-full bg-[#F5F0E6] flex flex-col items-center">
        <div className="flex items-center gap-3 py-8">
          <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <span className="text-[#C9A96E] text-sm opacity-60">✦</span>
          <div className="w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>
      </div>

      {/* ── RSVP Section ── */}
      <section className="relative w-full min-h-screen bg-[#4E0F1A] flex flex-col items-center justify-center px-6 py-20 sm:py-28 overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E')] opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08)_0%,transparent_65%)] pointer-events-none" />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-col items-center text-center max-w-md w-full"
        >
          {/* Small decorative line */}
          <div className="w-12 h-[1px] bg-[#C9A96E]/40 mb-8" />

          {/* Subtitle */}
          <p className="uppercase tracking-[0.5em] text-[0.65rem] text-[#D4B87A]/70 font-sans font-medium">
            Awaiting Your Presence
          </p>

          {/* RSVP Title */}
          <h2 className="font-cinzel text-5xl sm:text-7xl text-[#FFF4E3] font-medium tracking-widest mt-4 mb-3 drop-shadow-[0_2px_20px_rgba(201,169,110,0.2)]">
            RSVP
          </h2>

          {/* Gold divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
            <span className="text-[#C9A96E] text-xs opacity-60">✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
          </div>

          {/* Host Name */}
          <p className="font-hindi text-sm text-[#C9A96E]/80 mb-2">
            सस्नेह निमंत्रण
          </p>
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFF4E3] font-semibold tracking-wide">
            Arvind Charan
          </h3>

          {/* Address */}
          <p className="font-sans text-sm text-[#D9CDB8]/80 mt-4 max-w-xs leading-relaxed">
            157 Laxmi Nagar, Paota B Road,<br />
            Jodhpur, Rajasthan
          </p>

          {/* Phone numbers */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-5 font-sans text-sm text-[#D4B87A]/90">
            <a href={`tel:+91${primaryPhone}`} className="hover:text-[#FFF4E3] transition-colors">
              +91 {primaryPhone}
            </a>
            <span className="text-[#C9A96E]/30">|</span>
            <a href={`tel:+91${secondaryPhone}`} className="hover:text-[#FFF4E3] transition-colors">
              +91 {secondaryPhone}
            </a>
          </div>

          {/* Spacer */}
          <div className="mt-10 mb-2 w-full" />

          {/* Buttons — stacked, full width, generous size */}
          <div className="w-full max-w-xs flex flex-col gap-4">
            <a
              href={`tel:+91${primaryPhone}`}
              className="flex items-center justify-center gap-3 bg-[#FFF4E3] text-[#6A1C28] py-5 rounded-2xl font-sans text-sm uppercase tracking-[0.2em] font-bold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.97]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now
            </a>
            <a
              href={`https://wa.me/91${primaryPhone}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-sans text-sm uppercase tracking-[0.2em] font-bold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.97]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.93.813 2.791.813 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.418-.456-4.887-1.258l-5.613 1.472 1.498-5.467c-.886-1.521-1.398-3.298-1.398-5.187 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Blessing */}
          <p className="font-serif italic text-sm text-[#D9CDB8]/50 mt-12">
            "Your blessings are our greatest treasure."
          </p>
        </motion.div>
      </section>

      {/* ── Promo Footer ── */}
      <footer className="w-full bg-[#FFF4E3] py-8 px-4 flex flex-col items-center text-center border-t border-[#E8DFC8]">
        <p className="font-sans text-xs sm:text-sm text-[#6B5D4F] tracking-wide">
          Want a digital invitation like this?{" "}
          <a
            href={`https://wa.me/${sellerPhone}?text=${sellerMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6A1C28] underline underline-offset-4 decoration-[#C9A96E] hover:text-[#4A1521] transition-colors"
          >
            Click here to get yours
          </a>
        </p>
      </footer>
    </>
  );
}
