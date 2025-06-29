import Container from "../Container";
import logo from "../../assets/Logo.png";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";



const Navbar = () => {
    let [show,setShow] = useState(false);
    let handleShow = () =>{
        setShow(!show);
    }

  return (
    <div className="bg-navbarBg py-5">
      <Container>
        <div className="flex items-center">
          <div className="w-2/5">
            <img src={logo} alt="" />
          </div>
          <div className="w-3/5">
            <ul className={`lg:flex justify-end lg:static py-2 lg:py-0 duration-300 ease-in-out ${show == true ? "bg-gray-500 z-2 absolute left-0 top-[160px] w-full" : "absolute left-[-380px] top-[160px] z-2 w-full" }`}>
              <li>
                <a className="px-4 font-pops py-2 inline-block  text-white" href="#">Home</a>
              </li>
              <li>
                <a className="px-4 font-pops py-2 inline-block text-white" href="#">About</a>
              </li>
              <li>
                <a className="px-4 font-pops py-2 inline-block text-white" href="#">Services</a>
              </li>
              <li>
                <a className="px-4 font-pops py-2 inline-block text-white" href="#">Gallery</a>
              </li>
              <li>
                <a className="px-4 font-pops py-2 inline-block text-white" href="#">Blog</a>
              </li>
              <li>
                <a className="px-4 py-2 border-2 border-white font-pops text-white inline-block" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
             <div className="lg:hidden" onClick={handleShow}>
                {show ? <RxCross2/> : <IoMdMenu/>}
             </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
