import React from "react";
import "./booking.css";

import applicantIcon from "../assets/1.png";
import kinIcon from "../assets/2.png";
import photoIcon from "../assets/3.png";
import receiptIcon from "../assets/4.png";
import nicopIcon from "../assets/5.png";

const steps = [
  { id: "01", title: "Contact the official salesperson of Faisal Residencia" },
  { id: "02", title: "Inquire about all essential details about the society" },
  { id: "03", title: "Finalize your plot size and location based on your preference" },
  { id: "04", title: "Pay the down payment or the full payment" },
  { id: "05", title: "Attach the required documents, including the payment receipt" },
  { id: "06", title: "Submit the booking form at the official sales office of Faisal Residencia" },
];

const documents = [
  { icon: applicantIcon, text: "CNIC copies of the applicant" },
  { icon: kinIcon, text: "CNIC copies of the next of kin" },
  { icon: photoIcon, text: "Passport-sized photographs of the applicant" },
  { icon: receiptIcon, text: "Booking/full payment receipt" },
  { icon: nicopIcon, text: "NICOP, in case of Overseas Clients" },
];

const FaisalBookingProcess = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#b2872b] mb-2">
          Faisal Residencia Booking Process
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Book a plot in Faisal Residencia E-17, Islamabad is relatively easy, such as:
        </p>

        {/* STEPS WITH WIDER MOBILE BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center justify-center text-center py-6 px-5 shadow-sm 
              w-full sm:max-w-[180px] mx-auto
              ${index % 2 === 0 ? "bg-[#f4f4f4]" : "bg-[#946e23] text-white"}`}
            >
              <div className="booking-number text-3xl sm:text-4xl md:text-5xl mb-2">
                {step.id}
              </div>

              <div className="w-20 h-px mb-4 bg-current opacity-60" />

              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* Documents Heading */}
        <h3 className="text-center text-base md:text-lg font-semibold font-poppins text-[#b2872b] mb-2">
          Documents needed for booking a Plot in Faisal Residencia
        </h3>

        <p className="text-center text-base md:text-xl text-gray-800 max-w-6xl mx-auto mb-6">
          The following is the list of required documents that should be attached to the booking form for a plot in Faisal Residencia, Islamabad:
        </p>
      </div>

      {/* DOCUMENTS ROW */}
      <div className="mt-8 md:mt-10 w-screen relative left-1/2 -translate-x-1/2 border-b border-[#d2b46c]">
        <div className="flex flex-col md:flex-row items-stretch justify-between max-w-7xl mx-auto px-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className={`flex-1 flex flex-col items-center text-center py-6 px-4
              ${index !== documents.length - 1 ? "md:border-r md:border-[#d2b46c]" : ""}`}
            >
              <img
                src={doc.icon}
                alt={doc.text}
                className="w-12 h-12 md:w-14 md:h-14 mb-3 object-contain brown-icon"
              />

              <p className="text-sm md:text-lg text-gray-800">
                {doc.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Development Updates */}
      <div className="pt-10 max-w-6xl mx-auto px-4">
        <h3 className="text-center text-xl md:text-2xl font-poppins font-semibold text-[#a37a21] underline underline-offset-4 mb-3">
          Faisal Residencia Development Updates
        </h3>

        <p className="text-center text-gray-900 font-poppins max-w-5xl mx-auto mb-8 md:mb-10 text-sm md:text-base">
          The No Objection Certificate (NOC) of Faisal Residencia is in the final stages at the Capital Development Authority (CDA). Once the society receives its approval, the construction will begin. Stay tuned to us for the Faisal Residencia latest news.
        </p>

        <h3 className="text-center text-xl md:text-2xl font-poppins font-semibold text-[#997831] underline underline-offset-4 mb-3">
          Faisal Residencia Possession
        </h3>

        <p className="text-center text-gray-900 font-poppins max-w-5xl mx-auto text-sm md:text-base">
          The possession of the society is yet to be announced by the management. Keep visiting the Faisal Residencia official website for updates on the construction and possession.
        </p>
      </div>
    </section>
  );
};

export default FaisalBookingProcess;
