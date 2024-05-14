import React from "react";
import AppleLogo from "../assets/images/AppleLogo.png";
import SearchIcon from "../assets/images/SearchIcon.png";
import ShoppingBag from "../assets/images/ShoppingBag.png";

const navs = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white pb-[10px]">
      <nav className="flex justify-center pt-[10px] relative">
        <div>
          <img className="h-[20px]" src={AppleLogo} alt="Logo" />
        </div>
        <ul className="flex md:flex-row">
          {navs.map((items, key) => {
            return (
              <li className="ml-[40px] md:flex-row text-sm" key={key}>
                {items}
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row">
          <img
            className="h-[22px] ml-[25px]"
            src={SearchIcon}
            alt="SearchIcon"
          />
          <img
            className="h-[22px] ml-[20px]"
            src={ShoppingBag}
            alt="ShoppingBag"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
