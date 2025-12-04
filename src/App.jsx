import React from 'react'
import SocietyBanner from "./Components/SocietyBanner";
import FaisalResidencia from "./Components/FaisalResidencia";
import OwnerDeveloper from "./Components/OwnerDeveloper";
import Location from "./Components/Location";
import FaisalAccessibility from "./Components/FaisalAccessibility";
import NearbyLandmarks from "./Components/NearbyLandmarks";
import MasterPlam from "./Components/MasterPlan";
import PaymentPlan from "./Components/PaymentPlan";
import Features from "./Components/Features";
import Amenities from "./Components/Amenities";
import Booking from "./Components/Booking";
import Pros from "./Components/Pros";
import Benefits from "./Components/Benefits";

const App = () => {
  return (
    <div>
    <SocietyBanner />
    <FaisalResidencia />
    <OwnerDeveloper />
    <Location />
    <FaisalAccessibility />
    <NearbyLandmarks />
    <MasterPlam />
    <PaymentPlan />
    <Features />
    <Amenities />
    <Booking />
    <Pros />
    <Benefits />
    </div>
  )
}

export default App