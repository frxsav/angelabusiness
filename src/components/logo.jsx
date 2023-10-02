import React from "react";
import { useTranslation } from "react-i18next";
import logoimg from "../img/Logo.png";

function Logo() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-3 col-span-6 lg:col-span-2 col-start-2 lg:col-start-2">
        <img
          className="col-span-1"
          src={logoimg}
          alt="Logo"
        />
        <i className="col-span-2 self-center lg:text-xl text-md">
          {t("title")}
        </i>
      </div>
    </>
  );
}

export default Logo;
