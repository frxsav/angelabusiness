import React from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="bg-neutral-600 grid grid-cols-12 p-4 lg:p-5 lg:pb-2 text-neutral-100"
        style={{
          clipPath: "polygon(0% 0%, 95% 0%, 90% 50%, 95% 100%, 0% 100%)",
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=3394211017"
          target="_blank"
          rel="noreferrer"
          className="lg:col-start-2 col-span-6 lg:col-span-1 text-base lg:text-xl lg:text-center self-center"
        >
          <span className="active:text-teal-600 focus:text-neutral-100 hover:text-teal-600 transition duration-1 ">
            {t("footer.webinar")}
          </span>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=3394211017"
          target="_blank"
          rel="noreferrer"
          className="col-span-6 lg:col-span-2 text-base lg:text-xl lg:text-center self-center"
        >
          <span className="active:text-teal-600 focus:text-neutral-100 hover:text-teal-600 transition duration-1 ">
            {t("footer.start_activity")}
          </span>
        </a>
        <a href="#about" className="col-span-6 lg:col-span-1 text-base lg:text-xl lg:text-center self-center">
          <span className="active:text-teal-600 focus:text-neutral-100 hover:text-teal-600 transition duration-1 ">
            {t("footer.about")}
          </span>
        </a>
        <div className="lg:col-end-12 lg:col-span-2 self-center">
          <Social></Social>
        </div>
        <address className="lg:col-span-2 lg:col-end-12 col-span-7 text-xs pt-2 self-end">
          <span>{t("footer.copyright")}</span>
        </address>
      </div>
    </>
  );
};

export default Footer;
