import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  HiOutlineGlobeAlt,
  HiOutlineChartBar,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const CarouselList = () => {
  const { t } = useTranslation();
  return (
    <>
      <Carousel showArrows={false} showStatus={false}>
        <div className="rounded overflow-hidden pb-14 px-4 w-[90%] m-auto">
          <div className="flex flex-col items-center border border-teal-600 shadow-sm shadow-teal-600 pt-2 aspect-ratio">
            <HiOutlineBuildingStorefront className="text-7xl text-teal-600"></HiOutlineBuildingStorefront>
            <p className="font-bold text-xl pt-1 pb-2">
              {t("our_goal.first_point_title")}
            </p>
            <p className="text-base px-2">
              <Trans
                i18nKey={"our_goal.first_point_dsc"}
                components={{ b: <i className="text-teal-600" /> }}
              />
            </p>
          </div>
        </div>
        <div className="rounded overflow-hidden pb-14 px-4 w-[90%] m-auto">
          <div className="flex flex-col items-center border border-teal-600 shadow-sm shadow-teal-600 pt-2 aspect-ratio">
            <HiOutlineChartBar className="text-7xl text-teal-600"></HiOutlineChartBar>
            <p className="font-bold text-xl pt-1 pb-2">
              {t("our_goal.second_point_title")}
            </p>
            <p className="text-base px-2">
              <Trans
                i18nKey={"our_goal.second_point_dsc"}
                components={{ b: <i className="text-teal-600" /> }}
              />
            </p>
          </div>
        </div>
        <div className="rounded overflow-hidden pb-14 px-4 w-[90%] m-auto">
          <div className="flex flex-col items-center border border-teal-600 shadow-sm shadow-teal-600 pt-2 aspect-ratio">
            <HiOutlineGlobeAlt className="text-7xl text-teal-600"></HiOutlineGlobeAlt>
            <p className="font-bold text-xl pt-1 pb-2">
              {t("our_goal.third_point_title")}
            </p>
            <p className="text-base px-2">
              <Trans
                i18nKey={"our_goal.third_point_dsc"}
                components={{ b: <i className="text-teal-600" /> }}
              />
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselList;
