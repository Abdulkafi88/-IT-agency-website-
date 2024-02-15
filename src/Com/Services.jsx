import React, { useState } from "react"
import ServicesImg from "../assets/service-1.png"
import ServicesImg2 from "../assets/service-2.png"
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
  ])
  return (
    <React.Fragment>
      <div className="grid gap-12 grid-cols-2 bg-hsl-0-0%-96% xl:my-20 ">
        <div className="">
          <img
            width={"90%"}
            className="ml-20"
            src={ServicesImg}
            alt=" this is the service img "
          />
        </div>
        <div>
          {info.map((content, index) => (
            <div key={index}>
              <p className="text-hsl-219-13-44 mt-10  text-lg ml-20">
                {content.offer}
              </p>
              <h1
                className=" font-semibold text-hsl-224-48-22 lg:text-5xl mt-5 ml-12"
                dangerouslySetInnerHTML={{ __html: content.hook }}
              />
              <ul className="p-10">
                {info.map((content, index) => (
                  <>
                    <li className="mb-10" key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1  ">
                          {content.ServicesInfo}
                        </h2>
                      </div>
                    </li>
                    <li key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ml-10">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo1}
                        </h2>
                      </div>
                    </li>
                    <li className="mt-10" key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo2}
                        </h2>
                      </div>
                    </li>
                    <li className="mt-10" key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ml-10">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo3}
                        </h2>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="ml-20">
          {info.map((content, index) => (
            <div key={index}>
              <p className="text-hsl-219-13-44 mt-10  text-lg ml-20">
                {content.offer}
              </p>
              <h1
                className=" font-semibold text-hsl-224-48-22 lg:text-4xl mt-5 ml-12"
                dangerouslySetInnerHTML={{ __html: content.hook }}
              />
              <ul className="p-10">
                {info.map((content, index) => (
                  <>
                    <li className="mb-10" key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo}
                        </h2>
                      </div>
                    </li>
                    <li key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ml-10">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo1}
                        </h2>
                      </div>
                    </li>
                    <li className="mt-10" key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo2}
                        </h2>
                      </div>
                    </li>
                    <li className="mt-10" key={index}>
                      <div className="flex space-x-11 bg-hsl-0-0%-100% max-w-96 h-14 pt-2 ml-10">
                        <div className="ml-4 rounded-full w-10 h-10 mr-3 bg-hsl-0-0%-96% hover:bg-hover-hsl-342-100-50">
                          <i className="fa-solid fa-check text-2xl text-hsl-342-100-50 hover:text-hover-hsl-0-0-100 pl-2 pt-1"></i>
                        </div>

                        <h2 className="text-3xl font-semibold text-hsl-224-48-22 pt-1">
                          {content.ServicesInfo3}
                        </h2>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <img
            width={"80%"}
            className="mr-20"
            src={ServicesImg2}
            alt=" this is the service img "
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services
