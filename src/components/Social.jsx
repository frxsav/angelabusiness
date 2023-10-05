import React from "react";
import { BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";

const Social = () => {
  return (
    <div className="grid grid-cols-6 col-span-3 lg:col-span-2 lg:col-end-12 col-end-12 pt-2 lg:pt-4 gap-8 lg:gap-0 text-2xl lg:text-3xl">
      <a
        href="https://www.facebook.com/dott.ssaAngelaFormisano"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer col-span-1 transition-all duration-1 hover:text-teal-600 focus:text-inherit"
      >
        <BsFacebook></BsFacebook>
      </a>
      <a
        href="https://www.instagram.com/fisioterapista_angela/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer col-span-1 transition-all duration-1 hover:text-teal-600 focus:text-inherit"
      >
        <BsInstagram></BsInstagram>
      </a>
      <a
        href="https://www.tiktok.com/@angela_form"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer col-span-1 transition-all duration-1 hover:text-teal-600 focus:text-inherit"
      >
        <BsTiktok></BsTiktok>
      </a>
    </div>
  );
};

export default Social;
