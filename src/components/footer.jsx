import React from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="bg-neutral-600 grid grid-cols-12 p-5 pb-2 mr-[150px] text-neutral-100"
        style={{ borderRadius: "0% 2% 2% 0% / 100% 50% 50% 0%" }}
      >
        <a href="#" className="col-start-2 col-span-3 text-lg hover:text-teal-600 transition duration-1">
          {t("footer.webinar")}
        </a>
        <a href="#" className="col-span-3 text-lg hover:text-teal-600 transition duration-1">
          {t("footer.save_your_money")}
        </a>
        <div className="col-end-12 col-span-3">
          <Social></Social>
        </div>
        <a href="#" className="col-start-2 col-span-3 text-lg hover:text-teal-600 transition duration-1">
          {t("footer.start_activity")}
        </a>
        <a href="#" className="col-span-3 text-lg hover:text-teal-600 transition duration-1">
          {t("footer.about")}
        </a>
        <address className="col-span-3 col-end-12 pt-2">
          {t("footer.copyright")}
        </address>
      </div>
    </>
  );
};

export default Footer;
