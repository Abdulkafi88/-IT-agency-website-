import React, { useState } from "react";
import ServicesImg from "../assets/service-1.png";
import ServicesImg2 from "../assets/service-2.png";
const Services = () => {
  const [info, setindo] = useState([
    {
      offer: "Services We Offer",
      hook: "We are here , to help  your <br/> startup business",
      ServicesInfo: " Cloud Databases",
      ServicesInfo1: " Website Hosting",
      ServicesInfo2: " Remote Desktop",
      ServicesInfo3: " File Backup",
    },
  ]);
  return (
    <React.Fragment>
      <div className=" mt-20 bg-hsl-0-0%-96% ">
        <div className=" grid grid-cols-2">
          <div className="flex justify-center items-center mt-20  ">
            <img className="ml-96" width={"50%"} src={ServicesImg} />
          </div>
          <div className="flex justify-center">
            {info.map((content, contentIndex) => (
              <div key={contentIndex}>
                <p className=" text-hsl-219-13-44 font-serif mt-20  ">{content.offer}</p>
                <h1
                className=" font-semibold text-5xl text-hsl-224-48-22  mt-2"
                dangerouslySetInnerHTML={{ __html: content.hook }}
              />
                
              </div>
            ))}
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
