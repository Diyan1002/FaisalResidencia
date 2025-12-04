import React from "react";
import banner from "../assets/ban.png"; 

export default function SocietyBanner() {
  return (
    <div className="w-full">
      <img 
        src={banner} 
        alt="Faisal Residencia E-17 Islamabad" 
        className="
          w-full 
          object-contain    
          sm:h-auto        
          sm:object-cover   
        "
      />
    </div>
  );
}
