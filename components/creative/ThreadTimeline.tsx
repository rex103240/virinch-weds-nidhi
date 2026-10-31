"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

interface EventItem {
  title: string;
  hindi?: string;
  date: string;
  time: string;
  venue: string;
  dressCode?: string;
}

const events: EventItem[] = [
  {
    title: "Vinayak",
    hindi: "विनायक स्थापना",
    date: "Friday, 11 Dec 2026",
    time: "09:15 AM",
    venue: "Sweet Dream Land, New Nagour Rd, opp. National Law University, Jodhpur",
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
    venue: "157 Laxmi Nagar, Paota, Jodhpur",
  },
  {
    title: "Reception",
    hindi: "प्रीतिभोज",
    date: "Tuesday, 15 Dec 2026",
    time: "7:15 PM Onwards",
    venue: "Hanwant Garden, Paota B Road, Jodhpur",
  },
];

export default function ThreadTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 px-4 bg-[#F5F2EB] w-full flex flex-col items-center overflow-hidden"
    >
      <div className="text-center mb-24 relative z-10 flex flex-col items-center">
        <p className="uppercase tracking-[0.5em] text-[0.7rem] text-[#9B8D7F] mb-4 font-sans">
          The Journey
        </p>
        <OrnamentDivider motif="✦" />
        <h2 className="font-cinzel uppercase tracking-[0.2em] text-[clamp(1.5rem,4vw,2.5rem)] text-[#4A1521] mt-8">
          Wedding Festivities
        </h2>
      </div>

      <div className="w-[88%] md:w-full max-w-md mx-auto flex flex-col gap-12 pb-20">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#FCFAF5] border border-[#EAE3D9] rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center text-center relative"
          >
            <h3 className="font-cinzel text-2xl md:text-3xl text-[#6A1C28] mb-10 font-medium tracking-wide text-center">
              {event.title}
            </h3>

            <div className="flex flex-col gap-5 mb-10 w-full items-center">
              <div className="flex flex-col gap-4 items-start w-[90%] md:w-[75%]">
                {/* Date */}
                <div className="flex items-center gap-4">
                  <div className="w-[18px] h-[18px] bg-[#E0D4C3] rounded-[3px] flex-shrink-0" />
                  <p className="font-sans text-[0.95rem] text-[#6A5D4D]">{event.date}</p>
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8B69F" strokeWidth="1.5" className="flex-shrink-0">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <p className="font-sans text-[0.95rem] text-[#6A5D4D]">{event.time}</p>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8B69F" strokeWidth="1.5" className="flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="font-sans text-[0.95rem] text-[#6A5D4D]">{event.venue}</p>
                </div>
              </div>
            </div>

            {event.dressCode ? (
              <>
                <div className="w-full h-px bg-[#EAE3D9] mb-6" />
                <p className="font-sans text-[0.7rem] md:text-[0.75rem] uppercase tracking-[0.2em] text-[#9B8D7F] font-semibold text-center">
                  DRESS CODE · {event.dressCode}
                </p>
              </>
            ) : (
              <div className="text-[#C9A96E] opacity-60 text-sm tracking-widest">
                ✦ ✦ ✦
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
