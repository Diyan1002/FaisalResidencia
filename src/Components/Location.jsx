import React from "react";
import { motion } from "framer-motion";
import MapImg from "../assets/Location.png"; // make sure this path is correct

export default function FaisalResidenciaLocation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-[#e5e1d5] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-16"
    >
      {/* --- Top Section (Image + Text) --- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* TEXT FIRST ON MOBILE, RIGHT SIDE ON DESKTOP */}
        <div className="text-gray-800 leading-relaxed order-1 md:order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#9d7b2f]">
            Faisal Residencia Location
          </h2>

          <p className="mb-3 sm:mb-4 font-poppins text-sm sm:text-base">
            The prime location of Faisal Residencia makes it an ideal option 
            for both potential buyers and esteemed visitors. The housing society
            spans over E-17/1 and E-17/4, adjacent to the Cabinet Division 
            Housing Society and MPCHS Tele Gardens. It is strategically 
            positioned on the Rawalpindi–Kohat Road (N-80) near the Fateh Jang
            Interchange.
          </p>

          <p className="font-poppins text-sm sm:text-base">
            The proximity to the Peshawar–Islamabad (M-1) Motorway, Srinagar
            Highway, and Islamabad International Airport enables residents
            to reach the society efficiently. It also puts residents close
            to every essential facility, such as educational institutes, 
            medical facilities, and recreational activities in Rawalpindi and Islamabad. 
          </p>
        </div>

        {/* IMAGE SECOND ON MOBILE, LEFT SIDE ON DESKTOP */}
        <div className="w-full flex justify-center order-2 md:order-1">
          <img
            src={MapImg}
            alt="Faisal Residencia Map"
            className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
          />
        </div>
      </div>

      {/* --- Map Section --- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="mt-12 sm:mt-14 lg:mt-16 text-center px-1"
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9d7b2f] mb-2 sm:mb-3">
          Faisal Residencia Map
        </h3>
        <p className="text-gray-700 font-poppins text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
          The free OpenStreetMap location of Faisal Residencia E-17 is given below:
        </p>

        <div className="max-w-3xl mx-auto mt-8 sm:mt-10 relative">
          <iframe
            src="https://maps.google.com/maps?q=Faisal%20Residencia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[260px] sm:h-[330px] md:h-[420px] lg:h-[460px] rounded-xl"
            loading="lazy"
            style={{ border: "0" }}
            title="Faisal Residencia Map"
          ></iframe>

          <a
            href="https://maps.google.com/?q=Faisal+Residencia"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white shadow-xl w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
