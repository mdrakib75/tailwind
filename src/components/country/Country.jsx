import React from "react";
import Container from "../Container";

const Country = () => {
  return (
    <div className="py-[70px]">
      <Container>
        <div className="lg:flex items-center">
          <div className=" w-full lg:w-2/5">
            <div className="">
              <h3 className="lg:text-[48px] text-3xl font-bold font-pops pb-5 lg:pb-0">The biggest supplier on the country</h3>
            </div>
          </div>
          <div className=" w-full lg:w-3/5">
            <div className="">
              <p className=" lg:text-[16px] text-[12px] font-medium font-pops">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Country;
