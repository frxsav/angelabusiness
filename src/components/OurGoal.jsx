import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import {
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";

const OurGoal = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="bg-gradient-to-t from-neutral-50 to-neutral-400 grid grid-cols-12 py-20"
        style={{ borderRadius: "150% 50% 100% 100%/ 60% 50% 0% 0%" }}
      >
        <h1 className="text-5xl font-bold col-span-12 text-center pb-4 pt-20">
          {t("our_goal.title")}
        </h1>
        <div className="col-span-2 col-start-6 border-b-[4px] border-teal-600 mb-10"></div>
        <section className="flex flex-col items-center col-span-10 col-start-2 text-center text-2xl">
          <p className="text-2xl font-semibold pb-16">
            {" "}
            {t("our_goal.section1")}{" "}
          </p>
          <div className="grid grid-cols-12 gap-10 mt-10">
            <div class="max-w-sm rounded overflow-hidden shadow-md shadow-teal-600 col-span-4">
              <div class="px-6 py-4 flex flex-col items-center">
                <HiOutlineBuildingStorefront className="text-7xl text-teal-600 mb-2"></HiOutlineBuildingStorefront>
                <p class="font-bold text-xl mb-2">
                  {t("our_goal.first_point_title")}
                </p>
                <p class="text-gray-700 text-base">
                  <Trans
                    i18nKey={"our_goal.first_point_dsc"}
                    components={{ b: <i className="text-teal-600" /> }}
                  />
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-md shadow-teal-600 col-span-4">
              <div class="px-6 py-4 flex flex-col items-center">
                <HiOutlineChartBar className="text-7xl text-teal-600 mb-2"></HiOutlineChartBar>
                <p class="font-bold text-xl mb-2">
                  {t("our_goal.second_point_title")}
                </p>
                <p class="text-gray-700 text-base">
                  <Trans
                    i18nKey={"our_goal.second_point_dsc"}
                    components={{ b: <i className="text-teal-600" /> }}
                  />
                </p>
              </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden shadow-md shadow-teal-600 col-span-4">
              <div class="px-6 py-4 flex flex-col items-center">
                <HiOutlineGlobeAlt className="text-7xl text-teal-600 mb-2"></HiOutlineGlobeAlt>
                <p class="font-bold text-xl mb-2">
                  {t("our_goal.third_point_title")}
                </p>
                <p class="text-gray-700 text-base">
                  <Trans
                    i18nKey={"our_goal.third_point_dsc"}
                    components={{ b: <i className="text-teal-600" /> }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurGoal;
