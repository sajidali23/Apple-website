import React from "react";
import iPhoneXR from "../assets/videos/iPhoneXR.mp4";

const Offers = () => {
  return (
    <div className="text-center text-white pt-[30px] pb-[10px] mt-[20px] bg-black">
      <p>
        Get up to $800 instant savings on selected products with eligible HDFC
        Bank cards.Plus No Cost EMI rom most loading banks.
      </p>
      <a href="#" className="text-blue-400">
        See Offers
      </a>
      <div>
        <video autoplay="" loop muted play-inline className="w-full pt-[20px]">
          <source src={iPhoneXR} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Offers;
