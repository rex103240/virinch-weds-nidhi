"use client";

import { motion } from "framer-motion";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

export default function LanternRSVP() {
  const primaryPhone = "8003530144";
  const secondaryPhone = "7300337983";
  const waMessage = encodeURIComponent(
    "Namaste Arvind ji, Heartiest congratulations to Virinch & Nidhi on their wedding! RSVP confirmed."
  );

  return (
    <section className="relative py-16 sm:py-24 px-4 bg-[#FFF4E3] w-full flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.18)_0%,transparent_75%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg bg-[#FFFDF9] border border-[#E5DAC6] rounded-2xl p-6 sm:p-10 shadow-[0_6px_30px_rgba(44,24,16,0.06)] relative flex flex-col items-center text-center z-10"
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

        {/* Contact Details Card */}
        <div className="my-5 w-full bg-[#FAF4EA] border border-[#EFE5D3] rounded-xl p-5 flex flex-col items-center">
          <p className="font-hindi text-sm text-[#C9A96E] font-medium mb-1">
            सस्नेह निमंत्रण
          </p>
          <h3 className="font-cinzel text-2xl text-[#4A1521] font-bold tracking-wide">
            Arvind Charan
          </h3>
          <p className="font-sans text-[0.88rem] text-[#5C4D42] mt-2 max-w-sm leading-relaxed text-center">
            157 Laxmi Nagar, Paota B Road, Jodhpur, Rajasthan
          </p>

          {/* Clickable Phone Number Pills */}
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

        {/* Action Buttons: Call & WhatsApp */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2">
          {/* Call Button */}
          <a
            href={`tel:+91${primaryPhone}`}
            className="flex items-center justify-center gap-2.5 bg-[#6A1C28] hover:bg-[#52131e] text-[#FFFDF9] py-3.5 px-5 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/91${primaryPhone}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-5 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.93.813 2.791.813 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.418-.456-4.887-1.258l-5.613 1.472 1.498-5.467c-.886-1.521-1.398-3.298-1.398-5.187 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Footer auspicious note */}
        <p className="font-serif italic text-xs text-[#8B7355] mt-6 opacity-80">
          "Your blessings are our greatest treasure."
        </p>
      </motion.div>
    </section>
  );
}
