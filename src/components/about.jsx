import React from "react";
import Logo from "./logo";
import Social from "./Social";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      className="grid grid-cols-12 pt-3 overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-400"
      style={{ borderRadius: "100% 100% 150% 50%/ 0% 0% 60% 50%" }}
    >
      <Logo></Logo>
      <Social></Social>
      <div className="grid grid-cols-12 col-span-12 bg-c-blue">
        <address className="col-span-4 col-start-2 text-4xl flex flex-col justify-center">
          <BiSolidQuoteAltLeft className="text-7xl self-start"></BiSolidQuoteAltLeft>
          {t("about.cit")}
          <BiSolidQuoteAltRight className="text-7xl self-end"></BiSolidQuoteAltRight>
          <a
            className="text-white btn border-teal mt-20 p-6 rounded-full self-end gradient-to-right hover:shadow-xl"
            href="https://api.whatsapp.com/send?phone=3394211017"
            target="_blank"
          >
            {t("about.webinar")}
          </a>
        </address>
        <img
          className="col-span-4 col-start-8"
          src="./images/Angela.png"
          alt="Angela"
          width="500px"
          height="500px"
        />
      </div>
    </div>
  );
};

export default About;
