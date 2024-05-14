import React from "react";
import Pexel from "../assets/images/Pexel.jpg";
import AppleLogo from "../assets/images/AppleLogo.png";

const Section = () => {
  return (
    <div className="flex flex-row justify-evenly pt-[40px] bg-gray-200 mt-[30px]">
      <div>
        <h1 className="text-4xl mt-[70px]">
          Store.The best way to buy the products you love
        </h1>
      </div>
      <div className="">
        <img
          src={Pexel}
          alt="service"
          className="h-[30px] rounded-2xl w-[30px]"
        />
        <p>Need a Shopping help ?</p>
        <a href="#" className="text-blue-500">
          Ask a Specialist
        </a>
        <br />
        <img
          src={AppleLogo}
          alt="service"
          className="h-[30px] rounded-2xl w-[30px]"
        />
        <p>Visit an Apple Store</p>
        <a href="#" className="text-blue-500">
          Find One Near You
        </a>
      </div>
    </div>
  );
};

export default Section;
