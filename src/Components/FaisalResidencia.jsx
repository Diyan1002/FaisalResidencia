import React from "react";
import { motion } from "framer-motion";
import societyImg from "../assets/Pic1.png"; // adjust path if needed

export default function FaisalResidencia() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -350 }}   
      animate={{ opacity: 1, y: 0 }}     
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#e5dfd1] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8b6f32] -mt-12 sm:mb-10"
      >
        Faisal Residencia
      </motion.h2>

      {/* Paragraph 1 */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-[#2c2c2c] leading-relaxed font-poppins text-justify text-sm sm:text-base mb-4 sm:mb-6 max-w-4xl mx-auto"
      >
        The Faisal Residencia NOC is in the final stages at the Capital Development
        Authority (CDA). Owned by the real estate tycoon Chaudhary Abdul Majeed,
        Faisal Residencia E-17 is an ideal choice for both buyers seeking a
        comfortable lifestyle and investors looking for a profitable investment
        option. Due to its excellent location, the society has become a new
        landmark in Islamabad’s real estate market.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-[#2c2c2c] leading-relaxed font-poppins text-justify text-sm sm:text-base mb-8 sm:mb-10 max-w-4xl mx-auto"
      >
        Faisal Residencia Islamabad is a picturesque housing society developed by
        Faisal Town Group Pvt Ltd. Located in the CDA-administered E-17 Sector,
        with stunning views of the Margalla Hills, it offers a scenic retreat from
        the city’s hustle and bustle. Adjacent to the F-17 Sector, the society has
        quick access to the M-1 Motorway via the Fateh Jang Interchange and
        Srinagar Highway.
      </motion.p>

      {/* Row Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
        
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col order-2 md:order-1"
        >
          <p className="text-[#2c2c2c] font-poppins text-justify leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
            Faisal Residencia spans a vast area, occupying the E-17/1 and E-14/4
            sectors, and features a premium range of residential plots in various
            sizes, ranging from 5 Marla to 1 Kanal, as well as commercial plots.
            The diversity in plot sizes caters to the broad demands of buyers and
            investors. Each plot boasts breathtaking views of the Margalla Hills,
            providing an eco-friendly living environment.
          </p>

          <p className="text-[#2c2c2c] leading-relaxed font-poppins text-justify text-sm sm:text-base">
            The housing society is equipped with all essential amenities and modern
            facilities to upscale the lifestyle of its residents. From wide
            carpeted roads to mosques and educational institutes, every facility is
            available for residents to lead a contemporary urban lifestyle. The
            housing society caters to a diverse range of needs and lifestyle
            preferences.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <img
            src={societyImg}
            alt="Faisal Residencia Image"
            className="w-full max-w-sm sm:max-w-md md:max-w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
