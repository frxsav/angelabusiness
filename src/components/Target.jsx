import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Target = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-12 pt-0 lg:pt-20 overflow-hidden pb-20">
        <h1 className="text-4xl lg:text-5xl font-bold col-span-12 text-center pb-2 lg:pb-4 pt-0 lg_pt-20">
          {t("target.title")}
        </h1>
        <div className="col-span-2 col-start-6 border-b-[4px] border-teal-600 mb-5 lg:mb-10"></div>
        <section className="flex flex-col items-center col-span-10 col-start-2 lg:text-center text-xl lg:text-2xl pb-20">
          <p className="leading-9">
            <Trans
              i18nKey={"target.dsc1"}
              components={{
                b: <i className="text-teal-600" />,
                a: (
                  <a
                    className="underline-animation text-teal-600 font-bold"
                    href="https://api.whatsapp.com/send?phone=3394211017"
                    target="_blank"
                    rel="noreferrer"
                  />
                ),
              }}
            />
          </p>
        </section>
      </div>
    </>
  );
};

export default Target;