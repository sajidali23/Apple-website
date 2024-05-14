import React from "react";
import AppleLogo from "../assets/images/AppleLogo.png";

const list = [
  "Shop and Learn",
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "AirTag",
];
const list2 = [
  "Apple Podcasts",
  "Account",
  "Manage Your Apple ID",
  "Apple Store Account",
  "iCloud.com",
  "Entertainment",
  "Apple TV+",
  "Apple Music",
  "Apple Arcade",
];

const list3 = [
  "Apple Values",
  "Accessibility",
  "Environment",
  "Privacy",
  "Supplier Responsibility",
  "About Apple",
  "Newsroom",
  "Apple Leadership",
  "Carrer Oppourtunities",
  "Ethics & Compliance",
  "Events",
  "Contact Apple",
];

const Footer = () => {
  return (
    <div className="mt-[30px] bg-gray-300">
      <div className="flex ml-[5rem] pt-[20px] pb-[20px]">
        <img className="h-[22px]" src={AppleLogo} alt="logo" />
        <p className="ml-[30px]">Apple Online Store</p>
      </div>
      <div className="flex justify-evenly ">
        <ul>
          {list.map((items, i) => {
            return (
              <li key={i} className="hover:cursor-pointer">
                {items}
              </li>
            );
          })}
        </ul>
        <ul>
          {list2.map((item, i) => {
            return (
              <li key={i} className="hover:cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {list3.map((items, i) => {
            return (
              <li key={i} className="hover:cursor-pointer">
                {items}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-[20px]">
        <p className="text-center">
          Copyright © 2024 Apple Inc. All rights reserved.Privacy Policy Terms
          of Use Sales Policy Legal Site Map
        </p>
      </div>
    </div>
  );
};

export default Footer;
