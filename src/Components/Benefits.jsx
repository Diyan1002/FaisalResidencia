import React from "react";

const benefits = [
  {
    title: "Easy Access",
    desc: "The housing society can be accessed via major roads and highways, including Rawalpindi–Kohat (N-80) Road, Srinagar Highway, and Margalla Avenue.",
  },
  {
    title: "Backed by a Reliable Name – High ROI",
    desc: "Due to the solid reputation of Faisal Town Group and Chaudhary Abdul Majeed, like their other societies, Faisal Residencia is expected to generate high returns on investment within a few years.",
  },
  {
    title: "Affordable Prices",
    desc: "The society offers residential and commercial plots at highly competitive prices, making it one of the most affordable living options within the Twin Cities.",
  },
  {
    title: "Rapid Development and Possession",
    desc: "Faisal Town Group is known for developing societies at a rapid pace without compromising on the quality, while delivering fast possession to the clients.",
  },
];

const FaisalBenefits = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#9d7b2f] mb-3 md:mb-4">
          Benefits of Investing in Faisal Residencia
        </h2>
        <p className="text-center text-black max-w-5xl mx-auto mb-10 md:mb-14 text-sm md:text-base leading-relaxed">
          Are you wondering if Faisal Residencia is a good investment? Below are several benefits that make it a lucrative investment option for buyers and investors:
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative">
          {benefits.map((item, index) => (
            <div key={index} className="relative text-center px-2 sm:px-4">
              {/* Vertical Divider (desktop only) */}
              {index !== benefits.length - 1 && (
                <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-[#d2b46c]" />
              )}

              <h3 className="text-base md:text-lg font-semibold text-[#b2872b] mb-3 md:mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaisalBenefits;
