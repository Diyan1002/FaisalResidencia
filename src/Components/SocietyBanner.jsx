import React from "react";
import banner from "../assets/ban.png"; 

export default function SocietyBanner() {
  return (
    <div className="w-full h-[260px] sm:h-[280px] md:h-[400px] lg:h-[520px] xl:h-[600px] overflow-hidden">
      <img 
        src={banner} 
        alt="Faisal Residencia E-17 Islamabad" 
        className="w-full h-full "
      />
    </div>
  );
}
