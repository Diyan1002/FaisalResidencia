import React from "react";
import paymentImg from "../assets/pay.png"; // ✅ Adjust path if needed

const FaisalPaymentPlan = () => {
  const rows = [
    {
      size: "5.56 Marla (25×50)",
      cost: "3,185,000",
      regFee: "10,000",
      total: "3,195,000",
      down: "955,000",
      installment: "160,000",
      regTime: "2,365,000",
      possession: "160,000",
      lump: "2,525,000",
    },
    {
      size: "8 Marla (30×60)",
      cost: "3,985,000",
      regFee: "10,000",
      total: "3,995,000",
      down: "1,055,000",
      installment: "210,000",
      regTime: "2,945,000",
      possession: "210,000",
      lump: "3,155,000",
    },
    {
      size: "10.89 Marla (35×70)",
      cost: "5,285,000",
      regFee: "10,000",
      total: "5,295,000",
      down: "1,305,000",
      installment: "285,000",
      regTime: "3,900,000",
      possession: "285,000",
      lump: "4,185,000",
    },
    {
      size: "14.22 Marla (40×80)",
      cost: "6,585,000",
      regFee: "10,000",
      total: "6,595,000",
      down: "1,415,000",
      installment: "370,000",
      regTime: "4,840,000",
      possession: "370,000",
      lump: "5,210,000",
    },
    {
      size: "19.56 Marla (50×88)",
      cost: "8,840,000",
      regFee: "10,000",
      total: "8,850,000",
      down: "1,500,000",
      installment: "525,000",
      regTime: "6,465,000",
      possession: "525,000",
      lump: "6,990,000",
    },
  ];

  return (
    <section className="w-full bg-[#e5e1d5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-6 md:-mt-10">

        {/* ✅ HEADING */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#8b6f32] mb-3 md:mb-4">
          Faisal Residencia Payment Plan
        </h2>

        {/* ✅ INTRO */}
        <p className="text-center text-gray-900 max-w-5xl mx-auto leading-relaxed mb-3 md:mb-4 text-sm md:text-lg">
          Faisal Town management introduces a flexible payment plan to provide 
          luxury living at affordable rates. The flexibility in the payment 
          schedule makes ownership easier and more convenient for a broad spectrum of buyers and investors.
        </p>

        <p className="text-center text-gray-900 max-w-5xl font-poppins mx-auto mb-8 md:mb-10 text-sm md:text-base">
          Below is the breakdown of the Faisal Residencia E-17 payment plan:
        </p>

        {/* ✅ TABLE */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[900px] max-w-6xl border lg:ml-12 border-[#c9b27c] bg-[#fdf6e7] text-xs sm:text-sm md:text-base">
            <thead className="bg-[#f1f1f1] text-[#8b6f32] font-semibold">
              <tr>
                {[
                  "Plot Size",
                  "Cost of Plot",
                  "Registration Fee",
                  "Total",
                  "Down Payment",
                  "14 Installments",
                  "At Registration",
                  "On Possession",
                  "21% Lump Sum",
                ].map((head, i) => (
                  <th
                    key={i}
                    className="border border-[#c9b27c] px-2 py-2 text-center"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="even:bg-[#f8efde]">
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.size}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.cost}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.regFee}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.total}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.down}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.installment}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.regTime}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3">
                    {row.possession}
                  </td>
                  <td className="border border-[#c9b27c] px-2 sm:px-3 md:px-4 py-2 md:py-3 font-semibold text-[#8b6f32]">
                    {row.lump}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ IMAGE AT THE END */}
        <div className="mt-10 md:mt-16 flex justify-center">
          <img
            src={paymentImg}
            alt="Faisal Residencia Official Payment Plan"
            className="max-w-4xl w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default FaisalPaymentPlan;
