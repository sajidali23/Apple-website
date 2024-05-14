import React from "react";
import MacBookAir from "../assets/images/MacBookAir.jpg";
import AppleWWD from "../assets/images/AppleWWD.jpg";
import gsmarena_001 from "../assets/images/gsmarena_001.jpg";

const Cards = () => {
  return (
    <div className="mt-[30px] text-center">
      <h1 className="text-4xl mb-[10px] mt-[10px]">
        The latest. Take a look at what's new right now.
      </h1>
      <div className="flex justify-evenly mt-[35px] pb-[30px]">
        <div className="h-[470px] w-[380px] text-center rounded-lg p-[20px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
          <span>LIMITED TIME OFFER</span>
          <h1 className="mb-[10px] mt-[10px]">
            Save on Mac or iPad for university.
          </h1>
          <p className="mb-[20px]">
            You'll also save on Apple Pencil, Magic Keyboard for iPad
          </p>
          <img className=" ml-[48px] h-[220px] " src={MacBookAir} alt="image" />
        </div>
        <div className="h-[470px] w-[400px] text-center rounded-lg p-[20px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
          <span>LIMITED TIME OFFER</span>
          <h1 className="mb-[10px] mt-[10px]">MacBook Air 15. Buy Now</h1>
          <p className="mb-[20px]">
            You'll also save on Apple Pencil, Magic Keyboard for iPad, get 20%
            off AppleCare+ , and more.
          </p>
          <img className=" ml-[48px] h-[220px] " src={AppleWWD} alt="image" />
        </div>
        <div className="h-[470px] w-[400px] text-center bg-black rounded-lg p-[20px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer">
          <span className="text-white">LIMITED TIME OFFER</span>
          <h1 className="mb-[10px] mt-[10px] text-white">
            MacBook Air 15. Buy Now
          </h1>
          <p className="mb-[20px] text-white">
            You'll alse save on Apple Pencil , Magic Keyboard for iPad, get 20%
            off AppleCare + , and more
          </p>
          <img className="h-[180px]" src={gsmarena_001} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
