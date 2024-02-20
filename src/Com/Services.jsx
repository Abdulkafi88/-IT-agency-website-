import React, { useState } from "react"
import ServicesImg from "../assets/service-1.png"
import ServicesImg2 from "../assets/service-2.png"
const Services = () => {
  const [info, setindo] = useState([
    {
      offer: "Services We Offer",
      offer1: "Our Services",
      hook: "We are here , to help  your <br/> startup business",
      hook1:'Best IT & technology service in your area',
      ServicesInfo: " Cloud Databases",
      ServicesInfo1: " Website Hosting",
      ServicesInfo2: " Remote Desktop",
      ServicesInfo3: " File Backup",
    },
  ])
  return (
    <React.Fragment>
      <div className=" mt-20 bg-hsl-0-0%-96% ">
        <div className=" grid gap-10 grid-cols-2">
          <div className="flex justify-center items-center mt-10  ">
            <img className="ml-56" width={"70%"} src={ServicesImg} />
          </div>
          <div className="flex justify-center">
            {info.map((content, contentIndex) => (
              <>
                <div key={contentIndex}>
                  <p className=" text-hsl-219-13-44 font-serif mt-20  ">
                    {content.offer}
                  </p>
                  <h1
                    className=" font-semibold text-5xl text-hsl-224-48-22  mt-2"
                    dangerouslySetInnerHTML={{ __html: content.hook }}
                  />
                  <ul>
                    <li>
                      <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                        <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                        </div>
                        <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                          {content.ServicesInfo}
                        </h2>
                      </div>
                    </li>
                    <li className="ml-10">
                      <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                        <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                        </div>
                        <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                          {content.ServicesInfo1}
                        </h2>
                      </div>
                    </li>
                    <li>
                      <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                        <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                        </div>
                        <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                          {content.ServicesInfo2}
                        </h2>
                      </div>
                    </li>
                    <li className="ml-10">
                      <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                        <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                        </div>
                        <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                          {content.ServicesInfo3}
                        </h2>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ))}
          </div>
          {info.map((content, contentIndex) => (
            <>
              <div key={contentIndex}>
                <p className="text-hsl-219-13-44 font-serif text-md ml-40">
                  {content.offer1}
                </p>
                <h1
                  className=" font-semibold text-5xl text-hsl-224-48-22  ml-40 mt-5"
                  dangerouslySetInnerHTML={{ __html: content.hook1 }}
                />
                <ul>
                  <li className="ml-44 mt-10">
                    <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                      <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                        <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                      </div>
                      <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                        {content.ServicesInfo}
                      </h2>
                    </div>
                  </li>

                  <li className=" ml-52">
                    <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                      <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                        <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                      </div>
                      <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                        {content.ServicesInfo}
                      </h2>
                    </div>
                  </li>
                  <li className="ml-44 mt-5 ">
                    <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                      <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                        <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                      </div>
                      <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                        {content.ServicesInfo}
                      </h2>
                    </div>
                  </li>
                  <li className=" ml-52">
                    <div className="flex  mt-5 bg-hsl-0-0%-100% w-96 h-14 rounded-md">
                      <div className="group rounded-full bg-hsl-0-0%-96% w-10 h-10 mt-2 ml-5 hover:bg-hover-hsl-342-100-50">
                        <i className="fa-solid fa-check text-hsl-342-100-50 ml-3 mt-3 group-hover:text-white"></i>
                      </div>
                      <h2 className="ml-10 mt-3 text-2xl font-semibold text-hsl-224-48-22 ">
                        {content.ServicesInfo}
                      </h2>
                    </div>
                  </li>
                </ul>
              </div>
            </>
          ))}
          <div className="flex justify-center items-center mt-20 ">
            <img  width={"70%"} src={ServicesImg2} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services
