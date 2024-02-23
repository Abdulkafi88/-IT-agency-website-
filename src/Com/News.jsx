import React, { useState } from "react"
import img1 from "../assets/blog-1.jpg"
const News = () => {
  const [info, setinfo] = useState([
    {
      title: "How is technology working with new things?",
      tec: "TECHNOLOGY",
      date: "25 FEB, 2022",
      img: img1,
    },
  ])

  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center space-y-5 text-hsl-219-13-44 my-10">
        <p>Latest News</p>
        <h1 className="font-semibold text-hsl-224-48-22 text-5xl">
          Our latest articles & resources
        </h1>
      </div>
      <div className=" flex ">
        {info.map((content, contentIndex) => (
          <div className="flex">
            <div className="ml-20 mt-10 bg-red-900 w-80">
              <div >
                <img width={'100%'} src={content.img} alt="" />
              </div>
              <div className="flex ">
                <p>{content.tec}</p>
                <p className="ml-14">{content.tec}</p>
              </div>
            </div>
            <div className="ml-20 mt-10 bg-red-900">
              <div >
                <img width={'40%'} src={content.img} alt="" />
              </div>
              <div className="flex ">
                <p>{content.tec}</p>
                <p className="ml-14">{content.tec}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default News
