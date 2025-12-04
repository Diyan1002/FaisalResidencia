import React from "react";
import featuresImg from "../assets/features.png"; 

const FaisalFeatures = () => {
  const features = [
    "Well-planned master plan",
    "Easy accessibility and connectivity",
    "At the foothills of the Margalla Hills",
    "Controlled access with full-proof security",
    "Wide roads and spacious streets",
    "World-class educational institutes",
    "Modern healthcare and medical facilities",
    "Playgrounds and sports facilities",
  ];

  return (
    <section className="w-full bg-[#ffffff] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={featuresImg}
            alt="Faisal Residencia Features"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg lg:ml-12"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8b6f32] mb-4">
            Faisal Residencia Features
          </h2>

          <p className="text-gray-900 text-sm md:text-lg leading-relaxed mb-4">
            Below are the key features of the society that make it a stand-out
            option in Rawalpindi and Islamabad:
          </p>

          <ul className="space-y-2">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-900 text-sm md:text-base"
              >
                <span className="mt-3 rounded w-5 h-[4px] bg-[#917438] inline-block" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaisalFeatures;
