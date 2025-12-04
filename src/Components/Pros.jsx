import React from "react";

const pros = [
  "Project backed by a trusted owner and developer",
  "Excellent location with easy accessibility",
  "Well-planned master plan",
  "Modern amenities and facilities",
  "Flexible payment plan",
  "Fast development and early possession are expected",
];

const cons = [
  "NOC is in the final stages at CDA",
  "Located in an underdeveloped sector",
];

const FaisalProsCons = () => {
  return (
    <section className="w-full bg-[#e5e1d5] py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#9d7b2f] mb-3">
          Faisal Residencia Pros and Cons
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10 text-sm md:text-base leading-relaxed">
          Investing in Faisal Residencia comes with both advantages and
          disadvantages. Here are some key pros and cons:
        </p>

        {/* Pros & Cons Columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Pros */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-[#b2872b] mb-3 md:mb-4">
              Pros
            </h3>
            <ul className="space-y-3">
              {pros.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start font-normal text-black text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-3 mr-3 inline-block w-6 h-1 rounded-full bg-[#b2872b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider (desktop/tablet only) */}
          <div className="hidden md:block w-px bg-[#d2b46c]" />

          {/* Cons */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-[#b2872b] mb-3 md:mb-4">
              Cons
            </h3>
            <ul className="space-y-3">
              {cons.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start font-normal text-black text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-3 mr-3 inline-block w-6 h-1 rounded-full bg-[#b2872b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaisalProsCons;
