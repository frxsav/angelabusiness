import React from "react";
import { useTranslation } from "react-i18next";
// import logoimg from "../img/Logo.png"

function Logo() {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-3 col-span-2 col-start-2">
        <img
          className="col-span-1"
          src="./images/Logo.png"
          alt="Logo"
          width="90px"
          height="90px"
        />
        <i className="col-span-2 self-center text-xl"> {t("title")} </i>
      </div>
    </>
  );
}

export default Logo;
