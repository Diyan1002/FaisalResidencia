import React from "react";
import { motion } from "framer-motion";
import masterPlanImg from "../assets/plan.png"; 
import plotsImg from "../assets/plot.png"; 

const FaisalMasterPlan = () => {
  return (
    <>
      {/* ================= MASTER PLAN SECTION (LEFT → RIGHT) ================= */}
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full bg-white py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          
          <h2 className="text-center text-xl md:text-3xl font-semibold font-poppins text-[#a88843] mb-8 md:mb-10">
            Faisal Residencia Master Plan
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Text side */}
            <div className="text-gray-900 text-sm md:text-lg leading-relaxed space-y-4 md:space-y-6 text-justify max-w-xl mx-auto lg:ml-16">
              <p>
                The housing society occupies sectors E17/1 and E17/4, offering
                a vast area for both living and recreational activities. Its
                master plan is meticulously designed by a team of skilled
                developers, town planners, and architects. The master-planned
                housing society exhibits a perfect combination of residential
              </p>

              <p>
                The Faisal Residencia master plan includes wide roads, parks,
                schools, hospitals, cafes, restaurants, and other essential 
                facilities, providing every convenience at the doorsteps of
                residents and visitors. Thus, the housing society is a perfect 
                sanctuary for a luxurious and comfortable lifestyle in Islamabad. 
              </p>
            </div>

            {/* Image side */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-md md:max-w-lg border border-gray-300 shadow-lg">
                <img
                  src={masterPlanImg}
                  alt="Faisal Residencia Master Plan"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ================= PLOTS FOR SALE SECTION (BOTTOM → UP) ================= */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full bg-white py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-0">

          <h2 className="text-center text-xl md:text-2xl font-poppins font-semibold text-[#8b6f32] mb-4">
            Faisal Residencia Plot for Sale
          </h2>

          <p className="text-center text-gray-900 font-poppins max-w-5xl mx-auto mb-10 md:mb-12 text-sm md:text-base">
            Faisal Residencia Islamabad offers a wide range of plots for sale
            in various sizes to cater to diverse needs and demands. Below 
            are the sizes of plots for sale in Fasial Residencia, Islamabad:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Text side */}
            <div className="text-gray-900 text-sm md:text-lg space-y-4 lg:ml-16">
              <h3 className="text-lg md:text-xl font-semibold font-poppins text-[#8b6f32] mb-2 md:mb-4">
                Residential Plots in Faisal Residencia
              </h3>

              <p className="mb-2 md:mb-4">
                There are a total of 3,159 residential plots available in the
                following sizes, catering to the diverse needs and demands:
              </p>

              <ul className="space-y-1">
                {[
                  "25 x 50 (5.56 Marla)",
                  "30 x 50 (6.67 Marla)",
                  "30 x 60 (08 Marla)",
                  "30 x 70 (9.33 Marla)",
                  "35 x 60 (9.33 Marla)",
                  "35 x 70 (10.89 Marla)",
                  "40 x 60 (10.67 Marla)",
                  "40 x 70 (12.44 Marla)",
                  "40 x 80 (14.22 Marla)",
                  "50 x 88 (19.56 Marla)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="inline-block w-6 h-[4px] bg-[#8b6f32]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image side */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-md md:max-w-xl lg:mr-12 mt-6 md:mt-8 lg:mt-12 border border-gray-300 shadow-lg">
                <img
                  src={plotsImg}
                  alt="Faisal Residencia Residential Plots"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ================= PRICE PLAN GRID SECTION (BOTTOM → UP) ================= */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="w-full bg-white py-12 md:py-16"
      >
        <div className="max-w-full mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 font-poppins text-gray-900 lg:-mt-20">
            {[
              {
                title: "25 x 50 (5.56 Marla)",
                data: [
                  "Total Price (Rs.): 3,195,000",
                  "Down Payment (Rs.): 955,000",
                  "14 Installments (Rs.): 160,000 each",
                  "On Physical Possession (Rs.): 160,000",
                  "21% Off (Lump Sum) (Rs.): 2,525,000",
                ],
              },
              {
                title: "30 x 60 (08 Marla)",
                data: [
                  "Total Price (Rs.): 3,995,000",
                  "Down Payment (Rs.): 1,055,000",
                  "14 Installments (Rs.): 210,000 each",
                  "On Physical Possession (Rs.): 210,000",
                  "Lump Sum / Discounted (Rs.): 3,155,000",
                ],
              },
              {
                title: "35 x 70 (10.89 Marla)",
                data: [
                  "Total Price (Rs.): 5,295,000",
                  "Down Payment (Rs.): 1,305,000",
                  "14 Installments (Rs.): 285,000 each",
                  "On Physical Possession (Rs.): 285,000",
                  "Lump Sum / Discounted (Rs.): 4,185,000",
                ],
              },
              {
                title: "40 x 80 (14.22 Marla)",
                data: [
                  "Total Price (Rs.): 6,595,000",
                  "Down Payment (Rs.): 1,415,000",
                  "14 Installments (Rs.): 370,000 each",
                  "On Physical Possession (Rs.): 370,000",
                  "Lump Sum / Discounted (Rs.): 5,210,000",
                ],
              },
              {
                title: "50 x 88 (19.56 Marla)",
                data: [
                  "Total Price (Rs.): 8,840,000",
                  "Down Payment (Rs.): 1,500,000",
                  "14 Installments (Rs.): 525,000 each",
                  "On Physical Possession (Rs.): 525,000",
                  "21% Off (Lump Sum) (Rs.): 6,990,000",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="px-5 py-6 lg:border-r last:lg:border-r-0 border-[#8b6f32]"
              >
                <h3 className="text-base md:text-lg font-semibold text-[#8b6f32] mb-3 md:mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                  {item.data.map((line, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-2 inline-block w-5 h-[4px] bg-[#8b6f32]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* COMMERCIAL PLOTS TEXT */}
          <div className="mt-10 md:mt-12 text-center">
            <h3 className="text-lg md:text-xl font-semibold font-poppins text-[#997c3d] mb-3">
              Commercial Plots in Faisal Residencia
            </h3>
            <p className="max-w-6xl font-poppins mx-auto text-gray-900 text-sm md:text-base">
              Apart from residential plots, 89 commercial plots of various sizes are
              also available for sale in Faisal Residencia E-17. These commercial plots
              boost business and corporate activities within the housing society.
            </p>
          </div>

        </div>
      </motion.section>
    </>
  );
};

export default FaisalMasterPlan;
