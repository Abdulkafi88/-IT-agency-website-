import React, { useState } from "react";
import logo from "../assets/logo.svg";
const Nav = () => {
    const [navItems, setNavItems] = useState([
        { label: 'Home' },
        { labe2: 'Features' },
        { labe3: 'Service' },
        { labe4: 'Blog' },
        { labe5: 'Newsletter' }
      ]);
  return (
    <React.Fragment>
      <div>
        <nav className=" flex  items-center justify-between lg:mr-4 ">
          <img className=" lg:my-2 lg:ml-2  cursor-pointer" src={logo} alt="" />
          <ul className=" flex lg:space-x-10  sm:space-x-3 font-semibold text-hsl-224-48-22 text-xl cursor-pointer">

            {navItems.map((list,index)=>(
             <div key={index}>
                <li  className="hover:text-hover-hsl-342-100-50">{list.label}</li>
                <li  className="hover:text-hover-hsl-342-100-50">{list.labe2}</li>
                <li  className="hover:text-hover-hsl-342-100-50">{list.labe3}</li>
                <li  className="hover:text-hover-hsl-342-100-50">{list.labe4}</li>
                <li  className="hover:text-hover-hsl-342-100-50">{list.labe5}</li>
             </div>
             
            ))}
          </ul>
          <button className="bg-hsl-244-86-59  text-white font-semibold  pl-2 pr-2 py-2 rounded hover:bg-hover-hsl-342-100-50 ">
            <span> Get Start</span>{" "}
          </button>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Nav;
