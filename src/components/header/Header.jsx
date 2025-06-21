import React from "react";
import Container from "../Container";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";







const Header = () => {
  return (
    <header className="bg-headerColor py-3">
      <Container>
        <div className="lg:flex items-center">
          <div className="w-full lg:w-3/12">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <AiOutlineMail className="text-white" />
            <p className="text-white font-pops text-[12px]">mail@yourcompany.com</p>
          </div>
          </div>
          <div className="w-full lg:w-3/12 py-3 lg:py-0">
           <div className="flex items-center gap-3 justify-center lg:justify-start">
            <FiPhoneCall className="text-white"/>
            <p className="text-white font-pops text-[12px]">+896 120 5889 (Toll free)</p>
          </div></div>
          <div className=" w-full lg:w-6/12">
          <div className="flex lg:justify-end justify-center gap-4 ">
            <FaFacebookF className="text-white"/>
            <FaTwitter className="text-white"/>
            <FaLinkedinIn className="text-white"/>
          </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
