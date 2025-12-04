import React from "react";
import { motion } from "framer-motion";
import accessibilityImg from "../assets/Acc.png"; // adjust path if needed

const FaisalAccessibility = () => {
  const points = [
    "02 minutes drive away from F-17 Markaz",
    "05 minutes drive away from Rawalpindi–Kohat Road (N-80)",
    "10 minutes drive away from Fateh Jang–Tarnol Interchange",
    "11 minutes drive away from Peshawar–Islamabad M-1 Motorway",
    "15 minutes drive away from Tarnol, Islamabad.",
    "17 minutes drive away from Sangjani Toll Plaza.",
    "25 minutes drive away from New Islamabad International Airport.",
    "28 minutes drive away from Thalian Interchange.",
    "29 minutes drive away from Lahore–Islamabad M-2 Motorway",
    "30 minutes drive away from the Srinagar Highway.",
    "30 minutes drive away from Quaid-e-Azam International Hospital.",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: -250 }}          
      whileInView={{ opacity: 1, y: 0 }}       
      viewport={{ once: true, amount: 0.2 }}    
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-[#fff9ef] py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#9d7b2f] tracking-wide mb-4 uppercase">
          Faisal Residencia Accessibility
        </h2>

        {/* Intro text */}
        <p className="text-center text-gray-900 font-poppins max-w-4xl mx-auto mb-3 leading-relaxed text-sm md:text-base">
          The Faisal Residencia address is easily accessible due to its
          proximity to major roads, including the Rawalpindi–Kohat Road (N-80)
          and Margalla Avenue. This places residents close to key facilities and
          notable attractions within the Twin Cities.
        </p>

        <p className="text-center text-gray-900 font-poppins max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Below are the key accessibility points and their distance from the
          Faisal Residencia E17 housing society:
        </p>

        {/* Content: list + image */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Left: bullet list */}
          <ul className="space-y-4 flex-1">
            {points.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-gray-900 text-sm md:text-base"
              >
                <span className="mt-3 inline-block w-6 h-[3px] rounded-full bg-[#d1a85d] mr-3" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Right: image card */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full mt-8 lg:mt-24 max-w-md md:max-w-xl lg:max-w-lg h-64 sm:h-72 md:h-[300px] shadow-xl overflow-hidden rounded-xl">
              <img
                src={accessibilityImg}
                alt="Faisal Residencia accessibility map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FaisalAccessibility;
