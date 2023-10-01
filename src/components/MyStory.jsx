import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const MyStory = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid grid-cols-12 pb-10">
        <h1 className="pt-10 pb-3 text-5xl font-bold col-span-12 text-center">
          {t("my_story.title")}
        </h1>
        <div className="col-span-2 col-start-6 border-b-[4px] border-teal-600 mb-10"></div>
        <section className="flex flex-col items-center col-span-10 col-start-2 text-center text-2xl">
          <p className="py-2">
            <Trans
              i18nKey={"my_story.section1"}
              components={{ b: <b className="text-teal-600" /> }}
            />
            <br />
            {t("my_story.section2")}
          </p>

          <p className="py-2">
            <Trans
              i18nKey={"my_story.section3"}
              components={{ b: <b className="text-teal-600" /> }}
            />
          </p>

          <p className="py-2">
            <Trans
              i18nKey={"my_story.section4"}
              components={{ b: <b className="text-teal-600" /> }}
            />
            <br />
            <Trans
              i18nKey={"my_story.section5"}
              components={{ b: <b className="text-teal-600" /> }}
            />
          </p>
        </section>
      </div>
    </>
  );
};

export default MyStory;
