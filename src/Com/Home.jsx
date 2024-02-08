import React from "react";
import hero from "../assets/hero-banner.png";
import dog from "../assets/dog.png";
import shap1 from "../assets/shape1.png";
const Home = () => {
  return (
    <React.Fragment>
      
      <div className="grid grid-cols-2 items-center bg-hsl-0-0%-96% ">
        
        <div className="xl:ml-36 xl:max-w-xl lg:mt-60">
          <h1 className="font-bold lg:text-6xl text-hsl-224-48-22">
            Secure IT solutions for a more secure environment
          </h1>
          <p className=" text-hsl-219-13-44 mt-3 ">
            Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum
            felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et
            leo odio.
          </p>
          <button className="bg-hsl-342-100-50 hover:bg-hsl-244-86-59 text-white font-semibold  pl-2 pr-2 py-2 rounded mt-3">
            Get Started Now
          </button>
          <div className="max-w-sm xl:ml-64 xl: mt-20">
            <img src={dog} alt="" />
          </div>
        </div>

        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
