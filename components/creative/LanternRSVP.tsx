"use client";

import { motion } from "framer-motion";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

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
      <div className="w-full bg-[#F5F0E6] flex flex-col items-center pb-0 pt-4">
        <div className="flex items-center gap-3 py-6">
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
          <div className="flex items-center gap-2 text-[#C9A96E] text-xs tracking-[0.3em]">
            <span>✦</span>
            <span className="font-hindi text-sm opacity-80">शुभ विवाह</span>
            <span>✦</span>
          </div>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
        </div>
      </div>

      {/* ── RSVP Section — Dark Maroon Background ── */}
      <section className="relative w-full py-16 sm:py-24 px-4 bg-[#4E0F1A] flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E')] opacity-5 mix-blend-overlay pointer-events-none" />

        {/* Top radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.12)_0%,transparent_60%)] pointer-events-none" />

        {/* RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg bg-[#FFFDF9] border border-[#E5DAC6] rounded-2xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] relative flex flex-col items-center text-center z-10"
        >
          {/* Top gold embellishment */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mb-4" />

          <p className="uppercase tracking-[0.4em] text-[0.7rem] text-[#9B8D7F] mb-1 font-sans font-medium">
            Awaiting Your Warm Presence
          </p>

          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#6A1C28] font-semibold tracking-wider my-2">
            RSVP
          </h2>

          <OrnamentDivider motif="✦" className="py-2" />

          {/* Contact Details */}
          <div className="my-4 w-full bg-[#FAF4EA] border border-[#EFE5D3] rounded-xl p-5 flex flex-col items-center">
            <p className="font-hindi text-sm text-[#C9A96E] font-medium mb-1">
              सस्नेह निमंत्रण
            </p>
            <h3 className="font-cinzel text-2xl text-[#4A1521] font-bold tracking-wide">
              Arvind Charan
            </h3>
            <p className="font-sans text-[0.88rem] text-[#5C4D42] mt-2 max-w-sm leading-relaxed text-center">
              157 Laxmi Nagar, Paota B Road, Jodhpur, Rajasthan
            </p>

            {/* Phone Pills */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-3.5 font-sans text-xs sm:text-sm">
              <a
                href={`tel:+91${primaryPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#DFCDB2] text-[#6A1C28] hover:bg-white transition-colors font-medium shadow-xs"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 {primaryPhone}
              </a>
              <a
                href={`tel:+91${secondaryPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#DFCDB2] text-[#6A1C28] hover:bg-white transition-colors font-medium shadow-xs"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 {secondaryPhone}
              </a>
            </div>
          </div>

          {/* Call & WhatsApp Buttons */}
          <div className="w-full grid grid-cols-2 gap-3 mt-2">
            <a
              href={`tel:+91${primaryPhone}`}
              className="flex items-center justify-center gap-2.5 bg-[#6A1C28] hover:bg-[#52131e] text-[#FFFDF9] py-3.5 px-5 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call
            </a>
            <a
              href={`https://wa.me/91${primaryPhone}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-5 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.93.813 2.791.813 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.418-.456-4.887-1.258l-5.613 1.472 1.498-5.467c-.886-1.521-1.398-3.298-1.398-5.187 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Blessing */}
          <p className="font-serif italic text-xs text-[#8B7355] mt-6 opacity-80">
            "Your blessings are our greatest treasure."
          </p>
        </motion.div>

        {/* ── Promo footnote — merged into this section ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col items-center text-center z-10"
        >
          <div className="w-10 h-px bg-[#C9A96E]/30 mb-5" />
          <p className="font-sans text-xs sm:text-sm text-[#D4B87A]/80 tracking-wide">
            Love this invitation?
          </p>
          <a
            href={`https://wa.me/${sellerPhone}?text=${sellerMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 text-[#D4B87A] hover:text-[#FFF4E3] font-sans text-xs tracking-wider transition-all duration-300 hover:bg-[#C9A96E]/10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.93.813 2.791.813 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.418-.456-4.887-1.258l-5.613 1.472 1.498-5.467c-.886-1.521-1.398-3.298-1.398-5.187 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
            Get Your Own Card — WhatsApp
          </a>
          <p className="font-sans text-[0.6rem] text-[#C9A96E]/40 mt-5 tracking-[0.2em] uppercase">
            ✦ Interactive Luxury Digital Invitations ✦
          </p>
        </motion.div>
      </section>
    </>
  );
}
