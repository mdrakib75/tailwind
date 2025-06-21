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
            <ul className="flex justify-end">
              <li>
                <a className="px-4 font-pops text-white" href="#">Home</a>
              </li>
              <li>
                <a className="px-4 font-pops text-white" href="#">About</a>
              </li>
              <li>
                <a className="px-4 font-pops text-white" href="#">Services</a>
              </li>
              <li>
                <a className="px-4 font-pops text-white" href="#">Gallery</a>
              </li>
              <li>
                <a className="px-4 font-pops text-white" href="#">Blog</a>
              </li>
              <li>
                <a className="px-4 py-2 border-2 border-white font-pops text-white" href="#">CONTACT</a>
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
