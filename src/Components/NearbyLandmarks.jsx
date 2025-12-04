import React from "react";
import { motion } from "framer-motion";
import nearbyImg from "../assets/Resi.png"; // 👈 path/image name adjust karein

const FaisalNearbyLandmarks = () => {
  const points = [
    "Fateh Jang Interchange",
    "M-1 Motorway",
    "Tarnol Islamabad",
    "MPCHS Tele Gardens",
    "Cabinet Division Housing Society",
    "Sangjani Toll Plaza",
    "Multi Gardens B17",
    "Faisal Town Phase 1",
    "Islamabad International Airport",
    "Faisal Hills Islamabad",
    "Engineering Co-operative Society D-18",
  ];

  const infoBlocks = [
    {
      title: "Fateh Jang Interchange",
      desc: "This interchange connects the region to major motorways and highways, acting as a junction point for traffic in and out of the area. It also facilitates access to nearby towns and is often used by commuters traveling between Islamabad, Rawalpindi, and Punjab’s interior.",
    },
    {
      title: "M-1 Motorway",
      desc: "A primary motorway linking Islamabad to Peshawar, enabling efficient northbound travel with fewer delays. Its proximity boosts connectivity and can reduce travel time significantly for residents commuting to northern Pakistan.",
    },
    {
      title: "Tarnol Islamabad",
      desc: "Tarnol is a suburb located just northwest of Islamabad, with local markets, transport routes, and residential zones. Many people use Tarnol as a junction point when entering or exiting the city, making it strategically important.",
    },
    {
      title: "MPCHS Tele Gardens",
      desc: "A housing scheme in Sector F-17, jointly developed by MPCHS and T&TCHS, is known for its planned layout and amenities. It lies between the Tarnol Interchange and the GT Road, offering convenient access to both motorway and city routes.",
    },
    {
      title: "Cabinet Division Housing Society",
      desc: "A residential area developed for federal employees, with a structured design and a secure environment. Due to its government affiliation, it often enjoys well-maintained infrastructure and regulatory support.",
    },
    {
      title: "Sangjani Toll Plaza",
      desc: "Situated along the GT Road, this toll plaza is a key checkpoint between Islamabad and Rawalpindi. It regulates vehicular flow and acts as a reference point for many commuters traveling to or from the capital.",
    },
    {
      title: "Multi Gardens B-17",
      desc: "One of MPCHS’s flagship projects, this society is relatively well-developed with amenities, making it a popular investment choice. Its location is often considered a gateway to Islamabad for travelers coming in from the west.",
    },
    {
      title: "Faisal Town Phase 1",
      desc: "A project by Zedem International, known for rapid development and residential infrastructure. It shares road links with Faisal Residencia, ensuring easier movement between these adjacent neighborhoods.",
    },
  ];

  const thirdRow = [
    {
      title: "Islamabad International Airport",
      desc: "The Islamabad International Airport is a major aviation hub of Pakistan, providing both domestic and international connectivity. Its proximity to Faisal Residencia makes air travel highly convenient for residents.",
    },
    {
      title: "Faisal Hills Islamabad",
      desc: "Faisal Hills is a scenic housing project located near the Margalla Hills, offering beautiful views, modern infrastructure, and a peaceful residential environment.",
    },
    {
      title: "Engineering Co-operative Society D-18",
      desc: "D-18 Engineering Cooperative Housing Society is a well-planned residential area offering access to major roads, utilities, and commercial facilities nearby.",
    },
    {
      title: "Rawalpindi Ring Road",
      desc: "The Rawalpindi Ring Road is a major infrastructure project aimed at reducing traffic congestion and improving connectivity between different sectors of the twin cities.",
    },
  ];

  const firstRow = infoBlocks.slice(0, 4);
  const secondRow = infoBlocks.slice(4);

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}           // ✅ right se start
      whileInView={{ opacity: 1, x: 0 }}         // ✅ apni jagah pe aa jaye
      viewport={{ once: true, amount: 0.2 }}     // ✅ sirf 1 dafa animate
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-[#e5e1d5] py-16"
    >
      <div className="max-w-6xl mx-auto px-4 -mt-14 lg:px-0">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#8b6f32] mb-4">
          Faisal Residencia Nearby Landmarks and Places
        </h2>

        {/* Intro text */}
        <p className="text-center text-gray-900 font-poppins max-w-6xl mx-auto mb-3 leading-relaxed text-sm md:text-base">
          Because of its excellent location, the housing society is surrounded
          by several attractions, landmarks, societies, and places in Rawalpindi
          and Islamabad. It allows residents to reach the key destinations in
          the Twin Cities.
        </p>

        <p className="text-center text-gray-900 font-poppins max-w-6xl mx-auto mb-10 text-sm md:text-base">
          Among the notable attractions and landmarks near the society are:
        </p>

        {/* Content row (list + image) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row ml-0 lg:ml-8 items-start gap-8"
        >
          {/* Left: bullet list */}
          <ul className="flex-1 space-y-2">
            {points.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-gray-900 text-sm md:text-base"
              >
                <span className="mt-3 inline-block w-6 h-[4px] rounded-full bg-[#997c3e] mr-3" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Right: image */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg mt-6 lg:mt-10">
              <img
                src={nearbyImg}
                alt="Faisal Residencia nearby landmarks and places"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* FIRST ROW — 4 COLUMNS (left → right) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}           // ✅ left se start
          whileInView={{ opacity: 1, x: 0 }}         // ✅ left → right
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12"
        >
          {firstRow.map((item, index) => (
            <div
              key={index}
              className={`p-6 ${
                index !== firstRow.length - 1
                  ? "sm:border-r border-[#8b6f32]"
                  : ""
              }`}
            >
              <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* SECOND ROW — 4 COLUMNS (left → right) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4"
        >
          {secondRow.map((item, index) => (
            <div
              key={index}
              className={`p-6 ${
                index !== secondRow.length - 1
                  ? "sm:border-r border-[#8b6f32]"
                  : ""
              }`}
            >
              <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* THIRD ROW — 4 COLUMNS (left → right) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.11 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4"
        >
          {thirdRow.map((item, index) => (
            <div
              key={index}
              className={`p-6 ${
                index !== thirdRow.length - 1
                  ? "sm:border-r border-[#8b6f32]"
                  : ""
              }`}
            >
              <h3 className="text-lg font-bold font-poppins text-[#a88843] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base font-poppins leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FaisalNearbyLandmarks;
