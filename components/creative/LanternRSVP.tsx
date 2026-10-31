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
    <section className="relative py-24 px-4 bg-[#FFF4E3] min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.15)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-xl bg-[#FCFAF5] border border-[#EAE3D9] rounded-2xl md:rounded-3xl p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative flex flex-col items-center text-center z-10"
      >
        <p className="uppercase tracking-[0.5em] text-[0.7rem] text-[#9B8D7F] mb-3 font-sans">
          Awaiting Your Presence
        </p>

        <h2 className="font-cinzel text-[clamp(2.5rem,6vw,3.8rem)] text-[#6A1C28] mb-3 tracking-wider leading-none">
          RSVP
        </h2>

        <OrnamentDivider motif="✦" />

        <div className="mt-8 mb-6">
          <p className="font-cinzel text-xl md:text-2xl text-[#4A1521] font-semibold tracking-wide">
            Arvind Charan
          </p>
          <p className="font-sans text-[0.95rem] text-[#6A5D4D] mt-2 max-w-md leading-relaxed">
            157 Laxmi Nagar, Paota B Road, Jodhpur, Rajasthan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-3 font-sans text-sm text-[#8B7355]">
            <a
              href={`tel:+91${primaryPhone}`}
              className="hover:text-[#6A1C28] transition-colors font-medium underline underline-offset-4"
            >
              +91 {primaryPhone}
            </a>
            <span>•</span>
            <a
              href={`tel:+91${secondaryPhone}`}
              className="hover:text-[#6A1C28] transition-colors font-medium underline underline-offset-4"
            >
              +91 {secondaryPhone}
            </a>
          </div>
        </div>

        {/* Action Buttons: Call & WhatsApp */}
        <div className="w-full flex flex-col sm:flex-row gap-4 mt-6">
          {/* Call Button */}
          <a
            href={`tel:+91${primaryPhone}`}
            className="flex-1 flex items-center justify-center gap-3 bg-[#6A1C28] hover:bg-[#52131e] text-[#FFF4E3] py-4 px-6 rounded-xl font-sans text-sm uppercase tracking-wider font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
            className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-4 px-6 rounded-xl font-sans text-sm uppercase tracking-wider font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.529 1.93.813 2.791.813 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.418-.456-4.887-1.258l-5.613 1.472 1.498-5.467c-.886-1.521-1.398-3.298-1.398-5.187 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Footer auspicious note */}
        <p className="font-serif italic text-xs text-[#8B7355] mt-10 opacity-75">
          "Your blessings are our greatest treasure."
        </p>
      </motion.div>
    </section>
  );
}
