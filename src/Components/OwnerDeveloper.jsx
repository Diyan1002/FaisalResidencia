import React from "react";
import { motion } from "framer-motion";
import ownerImg from "../assets/Owner.png"; // replace with correct image path

export default function FaisalResidencia() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -80 }}           // ✅ upar se start
      whileInView={{ opacity: 1, y: 0 }}         // ✅ viewport mein aate hi niche apni jagah pe
      viewport={{ once: true, amount: 0.2 }}     // ✅ sirf 1 dafa, 20% section dikhte hi
      transition={{ duration: 0.60, ease: "easeOut" }}
      className="w-full py-12 px-4 max-w-7xl mx-auto"
    >
      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#8b6f32] mb-6">
        Faisal Residencia Owner and Developer
      </h2>

      {/* INTRO PARAGRAPHS */}
      <p className="text-center text-[#2c2c2c] font-poppins text-base md:text-lg mb-6 leading-relaxed">
        Faisal Residencia E-17 Islamabad is an upcoming project by Faisal Town Group Pvt Ltd,
        owned by Chaudhary Abdul Majeed.<br /> With the leadership of a visionary chairman and years
        of experience in the real estate industry, the firm has become a top<br /> developer in
        Rawalpindi and Islamabad.
      </p>

      <p className="text-center text-[#2c2c2c] font-poppins text-base md:text-lg mb-10 leading-relaxed">
        The company’s portfolio includes several projects and societies, notably Faisal Heights,
        Faisal Town, Faisal Hills, and Faisal<br /> Jewel. The firm is committed to delivering on-time
        possession without compromising on quality, and it reflects in its<br /> projects.
      </p>

      {/* IMAGE + LIST ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-16">
        <div>
          <h3 className="text-base md:text-lg text-[#2c2c2c] font-poppins mb-4">
            Below are the previous projects by Faisal Town Group Pvt<br /> Ltd:
          </h3>

          <ul className="space-y-3 text-[#2c2c2c] font-poppins text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Faisal Town Phase 1
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Faisal Town Phase 2
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Faisal Hills
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Faisal Margalla City
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Faisal Heights
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Faisal Jewel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#c39a42] font-bold">—</span> Sea Square B17
            </li>
          </ul>
        </div>

        <div className="w-full">
          <img src={ownerImg} alt="Owner" className="w-full rounded-lg" />
        </div>
      </div>

      {/* FIRST ROW — SCROLL PAR SEPARATE ANIMATION */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12"
        initial={{ opacity: 0, y: 40 }}               // ✅ neeche se halka sa
        whileInView={{ opacity: 1, y: 0 }}            // ✅ apni jagah par aa jaye
        viewport={{ once: true, amount: 0.3 }}        // ✅ jab ye row viewport mein aaye
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* CARD 1 */}
        <div className="p-6 sm:border-r border-[#8b6f32]">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Town Phase 1</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Faisal Town Phase 1 lies in Islamabad’s Sector F-18, beside the M-1 Motorway and
            Fateh Jang-Tarnol Interchange, offering excellent connectivity to Islamabad and Rawalpindi.
            It spans around 4,735 kanals of RDA-approved land, divided into Blocks A, B, C, and the
            newly launched B-1, with plots in various sizes and both residential and commercial zones.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 sm:border-r border-[#8b6f32]">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Town Phase 2</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Faisal Town Phase 2 is an expansive housing society featuring diverse residential and
            commercial plots. Strategically positioned for optimal connectivity, it offers modern
            infrastructure and amenities. The development is designed to cater to the growing demand
            for quality housing in the region.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 sm:border-r border-[#8b6f32]">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Hills</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Nestled at the foothills of the Margalla range, Faisal Hills offers a serene residential
            enclave with modern infrastructure. The community provides an amazing living experience
            amidst natural beauty. Its strategic location ensures easy access to both Islamabad and
            Rawalpindi.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Margalla City</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Faisal Margalla City offers a scenic residential community with panoramic views of the
            Margalla Hills. The development combines natural beauty with urban convenience, providing
            an amazing living environment. Its strategic location enhances connectivity to major urban centers.
          </p>
        </div>
      </motion.div>

      {/* MOBILE ONLY LINE */}
      <div className="w-full h-[1px] bg-[#8b6f32] my-6 block sm:hidden"></div>

      {/* SECOND ROW — THODI SI AUR DELAY SE ANIMATE */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        {/* CARD 5 */}
        <div className="p-6 sm:border-r border-[#8b6f32]">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Heights</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Faisal Heights is a 19-story residential complex featuring modern apartments and penthouses.
            Designed for contemporary urban living, it offers a mix of luxury and convenience. The development
            is strategically located near key commercial and transportation hubs.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="p-6 sm:border-r border-[#8b6f32]">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Jewel</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Faisal Jewel is a towering development comprising residential and commercial spaces. Offering
            luxury living with panoramic hill views, it stands as a landmark in the region. The project combines
            modern design with functional spaces to cater to diverse needs.
          </p>
        </div>

        {/* CARD 7 */}
        <div className="p-6 sm:border-r border-[#8b6f32]">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Sea Square B17</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Sea Square B17 is a mixed-use development featuring residential, commercial, and educational facilities.
            Promoting a balanced lifestyle, it integrates various amenities within a single community. The development
            is strategically located to offer easy access to essential services and transportation networks.
          </p>
        </div>

        {/* CARD 8 */}
        <div className="p-6">
          <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">Faisal Town Phase 1</h3>
          <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
            Faisal Town Phase 1 lies in Islamabad’s Sector F-18, beside the M-1 Motorway and Fateh Jang-Tarnol Interchange,
            offering excellent connectivity to Islamabad and Rawalpindi. It spans around 4,735 kanals of RDA-approved
            land, divided into Blocks A, B, C, and the newly launched B-1, with plots in various sizes and both
            residential and commercial zones.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
