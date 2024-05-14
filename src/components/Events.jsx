import React, { Fragment } from "react";
import AppleEvent from "../assets/images/AppleEvent.png";
import AppleEventSep from "../assets/images/AppleEventSep.jpg";
import IPhone from "../assets/images/IPhone.png";

const Events = () => {
  return (
    <Fragment>
      <div className="bg-black mt-[60px] p-[40px]">
        <h1 className="text-white text-center mb-[30px] text-3xl">
          Let's Explore Apple Events photos
        </h1>
        <div className="flex justify-evenly">
          <img className="h-[400px]" src={AppleEventSep} alt="Events" />
          <img className="h-[400px]" src={AppleEvent} alt="Events" />
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-[30px]">
        <img className="h-[700px]" src={IPhone} alt="Phone" />
        <h1 className="text-4xl">
          iPhone 14 Pro Leather Case with <br /> MagSafe - Ink
        </h1>
      </div>
    </Fragment>
  );
};

export default Events;
