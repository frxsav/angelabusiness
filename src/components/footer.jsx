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
          className="lg:col-start-2 col-span-6 lg:col-span-3 text-md hover:text-teal-600 transition duration-1 lg:order-1 active:text-teal-600 focus:text-neutral-100"
        >
          {t("footer.webinar")}
        </a>
        <a
          href="https://myw.tf/emcgqn"
          target="_blank"
          rel="noreferrer"
          className="col-span-6 lg:col-span-3 text-md hover:text-teal-600 transition duration-1 lg:order-2 active:text-teal-600 focus:text-neutral-100"
        >
          {t("footer.save_your_money")}
        </a>
        <div className="lg:col-end-12 lg:col-span-3 lg:order-3 order-6 col-end-10 pt-2 lg:pt-0">
          <Social></Social>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=3394211017"
          target="_blank"
          rel="noreferrer"
          className="lg:col-start-2 col-span-6 lg:col-span-3 text-md hover:text-teal-600 transition duration-1 lg:order-4 order-3 active:text-teal-600 focus:text-neutral-100"
        >
          {t("footer.start_activity")}
        </a>
        <a
          href="#about"
          className="col-span-6 lg:col-span-3 text-md hover:text-teal-600 transition duration-1 lg:order-5 order-4 active:text-teal-600 focus:text-neutral-100"
        >
          {t("footer.about")}
        </a>
        <address className="lg:col-span-3 lg:col-end-12 col-span-7 text-xs pt-2 lg:order-6 order-5 self-end">
          {t("footer.copyright")}
        </address>
      </div>
    </>
  );
};

export default Footer;
