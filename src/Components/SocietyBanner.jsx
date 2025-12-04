import React from "react";
import banner from "../assets/banner.jpg"; // adjust path if needed

export default function SocietyBanner() {
  return (
    <div className="w-full">
      <img 
        src={banner} 
        alt="Faisal Residencia E-17 Islamabad" 
        className="w-full object-cover"
      />
    </div>
  );
}
