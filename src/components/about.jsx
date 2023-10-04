import React from "react";
import Logo from "./logo";
import Social from "./Social";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import angela from "../img/Angela.png";

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
        <p className="col-span-9 lg:col-span-4 lg:col-start-2 col-start-2 text-xl lg:text-4xl flex flex-col justify-center order-2 lg:order-1 text-center">
          <BiSolidQuoteAltLeft className="text-3xl lg:text-7xl self-start"></BiSolidQuoteAltLeft>
          {t("about.cit")}
          <BiSolidQuoteAltRight className="text-3xl lg:text-7xl self-end"></BiSolidQuoteAltRight>
          <a
            className="pulse text-white border-teal mb-12 lg:mb-0 lg:mt-20 p-6 lg:px-10 rounded-full lg:self-end gradient-to-right hover:shadow-xl font-semibold self-center"
            href="https://api.whatsapp.com/send?phone=3394211017"
            target="_blank"
            rel="noreferrer"
          >
            {t("about.webinar")}
          </a>
        </p>
        <img
          className="col-span-7 lg:col-span-4 col-start-3 lg:col-start-8 border-b border-b-teal-600 rounded-b-full lg:border-none lg:rounded-none lg:order-2"
          src={angela}
          alt="Angela"
        />
      </div>
    </div>
  );
};

export default About;
