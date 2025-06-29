import React from "react";
import AboutImg01 from "../../assets/about_img01.png";
import AboutImg02 from "../../assets/about_img02.png";
import AboutImg03 from "../../assets/about_img03.png";
import AboutImg04 from "../../assets/about_img04.png";
const About = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between">
        <div className=" w-[49%] lg:w-[24%]">
          <div className="">
            <img src={AboutImg01} alt="" />
          </div>
        </div>
        <div className=" w-[49%] lg:w-[24%]">
          <div className="">
            <img src={AboutImg02} alt="" />
          </div>
        </div>
        <div className=" w-[49%] lg:w-[24%] mt-2 lg:mt-0">
          <div className="">
            <img src={AboutImg03} alt="" />
          </div>
        </div>
        <div className=" w-[49%] lg:w-[24%] mt-2 lg:mt-0">
          <div className="">
            <img src={AboutImg04} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
