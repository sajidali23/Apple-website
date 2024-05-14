import React from "react";
import image1 from "../assets/images/image1.png";
import airpods from "../assets/images/airpods.png";
import Applewatch from "../assets/images/Applewatch.png";
import ApplePad from "../assets/images/ApplePad.png";
import monitor from "../assets/images/monitor.png";
import IPhone from "../assets/images/IPhone.png";

const Helper = () => {
  return (
    <div className="flex pb-[30px] justify-evenly hover:cursor-pointer bg-gray-200">
      <div>
        <img src={image1} alt="product" className="h-[100px]" />
        <br />
        <a href="#" className="mt-[20px]">
          Macbook
        </a>
      </div>
      <div>
        <img src={airpods} alt="product" className="h-[100px] " />
        <br />
        <a href="#">AirPods</a>
      </div>
      <div>
        <img src={Applewatch} alt="product" className="h-[100px] " />
        <br />
        <a href="#">iWatch</a>
      </div>
      <div>
        <img src={IPhone} alt="product" className="h-[100px] " />
        <br />
        <a href="#">iPhone</a>
      </div>
      <div>
        <img src={ApplePad} alt="product" className="h-[100px] " />
        <br />
        <a href="#">iPad</a>
      </div>
      <div>
        <img src={monitor} alt="product" className="h-[100px] " />
        <br />
        <a href="#">Monitor's</a>
      </div>
    </div>
  );
};

export default Helper;
