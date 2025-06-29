import React from "react";
const Service = () => {
  return (
    <div className="py-8">
      <div className=" lg:flex items-center">
        <div className=" pb-15 lg:pb-0 w-[100%] lg:w-1/2 pl-25">
          <div className=" lg:w-[509px]">
            <h2 className="font-pops font-bold text-[35px] lg:text-[64px]">
              Our Services
            </h2>
            <p className="font-pops font-medium text-[12px] lg:text-[16px] text-[#6C6C6C] pr-13">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div
            className={`bg-[url(../../../public/service_img01.png)] h-[410px] bg-no-repeat bg-center bg-cover  relative z-[1] after:absolute after:left-0 after:top-0 after:content-[""] after:h-[100%] after:w-full after:bg-[rgba(27,26,26,0.5)] after:z-[-1]`}
          >
            <h3 className="text-white font-bold font-pops text-[18px] lg:text-4xl pt-[147px] pl-[116px]">
              Modern natural oil and gas refineries.
            </h3>
            <div className="ml-[116px] mt-5">
              <a
                href="#"
                className="bg-red-600 py-2 px-4 lg:py-3 lg:px-7 font-pops font-semibold lg:text-[16px] text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 mt-3 lg:mt-0">
          <div
            className={`bg-[url(../../../public/service_img02.png)] h-[410px] bg-no-repeat bg-center bg-cover  relative z-[1] after:absolute after:left-0 after:top-0 after:content-[""] after:h-[100%] after:w-full after:bg-[rgba(27,26,26,0.5)] after:z-[-1]`}
          >
            <h3 className="text-white font-bold font-pops text-[18px] lg:text-4xl pt-[147px] pl-[116px]">
              Modern natural oil and gas refineries.
            </h3>
            <div className="ml-[116px] mt-5">
              <a
                href="#"
                className="bg-red-600 py-2 px-4 lg:py-3 lg:px-7 font-pops font-semibold lg:text-[16px] text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-3 lg:mt-0">
          <div
            className={`bg-[url(../../../public/service_img03.png)] h-[410px] bg-no-repeat bg-center bg-cover  relative z-[1] after:absolute after:left-0 after:top-0 after:content-[""] after:h-[100%] after:w-full after:bg-[rgba(27,26,26,0.5)] after:z-[-1]`}
          >
            <h3 className="text-white font-bold font-pops text-[18px] lg:text-4xl pt-[147px] pl-[116px]">
              Modern natural oil and gas refineries.
            </h3>
            <div className="ml-[116px] mt-5">
              <a
                href="#"
                className="bg-red-600 py-2 px-4 lg:py-3 lg:px-7 font-pops font-semibold lg:text-[16px] text-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
