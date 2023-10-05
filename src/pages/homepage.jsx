import React from "react";
import About from "../components/about";
import MyStory from "../components/MyStory";
import OurGoal from "../components/OurGoal";
import Target from "../components/Target";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <>
      <About></About>
      <Target></Target>
      <MyStory></MyStory>
      <OurGoal></OurGoal>
      <Footer></Footer>
    </>
  );
};

export default Homepage;
