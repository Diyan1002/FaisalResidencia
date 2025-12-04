import React from "react";

// IMPORT ICON IMAGES
import gated from "../assets/gated.png";
import road from "../assets/road.png";
import mosque from "../assets/mosque.png";
import school from "../assets/school.png";
import hospital from "../assets/hospital.png";
import sports from "../assets/sports.png";
import utilities from "../assets/utilities.png";
import security from "../assets/security.png";

const FaisalAmenities = () => {
  const amenities = [
    {
      icon: gated,
      title: "A Gated Community",
      desc: "With boundary walls, the society creates a secure and sound living environment, ensuring residents’ peace of mind.",
    },
    {
      icon: road,
      title: "Wide Roads",
      desc: "The wide roads and spacious streets allow residents to travel within or outside the society without any hassle.",
    },
    {
      icon: mosque,
      title: "Mosques",
      desc: "There are several across society, providing a sacred space for daily and occasional prayers, and also serving as a hub for religious and spiritual education.",
    },
    {
      icon: school,
      title: "Educational Institutes",
      desc: "The management ensures that residents’ children receive world-class education in a thriving environment.",
    },
    {
      icon: hospital,
      title: "Medical Facilities",
      desc: "The society features modern hospitals and top-notch medical facilities to provide enhanced healthcare services.",
    },
    {
      icon: sports,
      title: "Playgrounds and Sports Facilities",
      desc: "To foster social interaction among the residents, the society features numerous playgrounds, parks, and sports facilities.",
    },
    {
      icon: utilities,
      title: "Basic Utilities",
      desc: "All necessary amenities for a modern urban lifestyle, including water, gas, electricity, and internet, are available within the society.",
    },
    {
      icon: security,
      title: "24/7 Security",
      desc: "Faisal Residencia offers a secure living environment, complete with a comprehensive surveillance system and CCTV cameras, which help prevent unwanted incidents and occurrences.",
    },
  ];

  return (
    <section className="w-full bg-[#e5e1d5] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#8b6f32] mb-4 md:mb-6">
          Faisal Residencia Amenities and Facilities
        </h2>

        <p className="text-gray-900 max-w-5xl mx-auto leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
          Faisal Residencia E-17 offers a complete lifestyle with a premium
          range of world-class facilities and essential amenities. These
          facilities are designed to provide maximum luxury, leisure,
          comfort, and convenience to residents and visitors.
        </p>

        <p className="text-gray-900 max-w-3xl mx-auto mb-8 md:mb-12 text-sm md:text-base">
          Among the notable amenities and facilities are:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#c9b27c] gap-y-10 sm:gap-y-12">
          {amenities.map((item, idx) => (
            <div key={idx} className="px-4 md:px-6 flex flex-col items-center text-center">
              {/* ✅ ICON */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain mb-3 md:mb-4 brown-icon"
              />

              <h3 className="text-[#8b6f32] font-semibold mb-2 md:mb-3 text-base md:text-lg">
                {item.title}
              </h3>

              <p className="text-gray-900 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaisalAmenities;
