"use client";

import { motion } from "framer-motion";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

interface EventItem {
  title: string;
  hindi: string;
  date: string;
  time: string;
  venue: string;
  note?: string;
}

const events: EventItem[] = [
  {
    title: "Vinayak Sthapana",
    hindi: "विनायक स्थापना",
    date: "Friday, 11 Dec 2026",
    time: "09:15 AM",
    venue: "Residence, Paota, Jodhpur",
  },
  {
    title: "Ghritpan Ceremony",
    hindi: "घृतपान संस्कार",
    date: "Friday, 11 Dec 2026",
    time: "10:15 AM",
    venue: "Sweet Dream Land, New Nagour Rd, opp. National Law University, Jodhpur",
  },
  {
    title: "Bandoli",
    hindi: "बंदोली",
    date: "Friday, 11 Dec 2026",
    time: "7:15 PM",
    venue: "Sweet Dream Land, New Nagour Rd, opp. National Law University, Jodhpur",
  },
  {
    title: "Barat Prasthan",
    hindi: "बारात प्रस्थान",
    date: "Saturday, 12 Dec 2026",
    time: "12:15 PM",
    venue: "Residence, Paota, Jodhpur",
  },
  {
    title: "Reception",
    hindi: "प्रीतिभोज एवं स्वागत",
    date: "Tuesday, 15 Dec 2026",
    time: "7:15 PM Onwards",
    venue: "Hanwant Garden, Paota B Road, Jodhpur",
  },
];

export default function ThreadTimeline() {
  return (
    <section className="relative py-16 sm:py-24 px-4 bg-[#F5F0E6] w-full flex flex-col items-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 relative z-10 flex flex-col items-center">
        <p className="uppercase tracking-[0.4em] text-[0.7rem] text-[#9B8D7F] mb-4 sm:mb-5 font-sans font-medium">
          Auspicious Celebrations
        </p>
        <h2 className="font-cinzel uppercase tracking-[0.15em] text-2xl sm:text-4xl text-[#4A1521] font-semibold">
          Wedding Festivities
        </h2>
        <OrnamentDivider motif="✦" className="py-3" />
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-lg mx-auto flex flex-col gap-6 sm:gap-7 relative z-10 pb-8">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
            className="w-full bg-[#FFFDF9] border border-[#E5DAC6] hover:border-[#C9A96E] rounded-2xl p-6 sm:p-7 shadow-[0_4px_24px_rgba(44,24,16,0.04)] transition-all duration-300 relative group"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent opacity-60" />

            {/* Event Title & Hindi Subtitle */}
            <div className="flex flex-col items-center text-center pb-4 mb-5 border-b border-[#EFE8DA]">
              <span className="font-hindi text-sm text-[#C9A96E] font-medium tracking-wide mb-1">
                {event.hindi}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#6A1C28] font-semibold tracking-wide">
                {event.title}
              </h3>
            </div>

            {/* Event Info List */}
            <div className="flex flex-col gap-3.5 text-left max-w-md mx-auto">
              {/* Date */}
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] flex items-center justify-center flex-shrink-0 text-[#B8963E]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <p className="font-sans text-[0.92rem] text-[#3D2E24] font-medium">
                  {event.date}
                </p>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] flex items-center justify-center flex-shrink-0 text-[#B8963E]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <p className="font-sans text-[0.92rem] text-[#3D2E24] font-medium">
                  {event.time}
                </p>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] flex items-center justify-center flex-shrink-0 text-[#B8963E] mt-0.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="font-sans text-[0.88rem] text-[#5C4D42] leading-snug">
                  {event.venue}
                </p>
              </div>
            </div>

            {/* Bottom motif */}
            <div className="mt-5 pt-3 border-t border-[#F5EFE3] flex justify-center items-center gap-2 text-[#C9A96E] opacity-60 text-xs tracking-widest">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
