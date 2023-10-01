import React from "react";
import { BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";

const Social = () => {
  return (
    <div className="grid grid-cols-6 col-span-2 col-end-12 pt-4">
      <a
        href="https://www.facebook.com/dott.ssaAngelaFormisano"
        target="_blank"
        rel="noreferrer"
        className="text-3xl cursor-pointer col-span-1 transition-all duration-1 hover:text-teal-600"
      >
        <BsFacebook></BsFacebook>
      </a>
      <a
        href="https://www.instagram.com/fisioterapista_angela/"
        target="_blank"
        rel="noreferrer"
        className="text-3xl cursor-pointer col-span-1 transition-all duration-1 hover:text-teal-600"
      >
        <BsInstagram></BsInstagram>
      </a>
      <a
        href="https://www.tiktok.com/@angela_form"
        target="_blank"
        rel="noreferrer"
        className="text-3xl cursor-pointer col-span-1 transition-all duration-1 hover:text-teal-600"
      >
        <BsTiktok></BsTiktok>
      </a>
    </div>
  );
};

export default Social;
