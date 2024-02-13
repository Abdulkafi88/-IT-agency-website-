import React, { useState } from "react";
import FeaturedIcon from "../assets/features-icon-1.png";
import FeaturedIcon2 from "../assets/features-icon-2.png";
import FeaturedIcon3 from "../assets/features-icon-3.png";
import FeaturedIcon4 from "../assets/features-icon-4.png";
const Features = () => {
  const [featursList, setFeatursList] = useState([
    {
      title: " Zero Configuration",
      img: FeaturedIcon,
      des: `       Lorem ipsum dolor sit amet, <br /> conse ctetur adipiscing elit,
        <br /> Sed est non feugiat sagittis,`,
      learnMore: "Learn More  >",
    },
    {
        title: " Code Security",
        img: FeaturedIcon2,
        des: `       Lorem ipsum dolor sit amet, <br /> conse ctetur adipiscing elit,
          <br /> Sed est non feugiat sagittis,`,
        learnMore: "Learn More >",
      },
    {
        title: " Team Management",
        img: FeaturedIcon3,
        des: `       Lorem ipsum dolor sit amet, <br /> conse ctetur adipiscing elit,
          <br /> Sed est non feugiat sagittis,`,
        learnMore: "Learn More  >",
      },
    {
        title: " Access Controlled",
        img: FeaturedIcon4,
        des: `       Lorem ipsum dolor sit amet, <br /> conse ctetur adipiscing elit,
          <br /> Sed est non feugiat sagittis,`,
        learnMore: "Learn More >",
      },
  ]);
  return (
    <React.Fragment >
      <div className="flex flex-col items-center mt-16 bg-white  ">
        <p className="text-hsl-219-13-44 text-xl ">How Can Help You</p>
        <h2 className="font-semibold text-hsl-224-48-22 text-5xl xl:max-w-5xl my-4">
          We’re helping teams <br /> do their best work
        </h2>
      </div>
      <div className=" flex ml-40 mt-20 ">
        {featursList.map((list, index) => (
          <div key={index} className="ml-14 space-y-3">
            <img src={list.img} alt="logo" />
            <h3 className="text-2xl font-bold text-hsl-224-48-22">
              {list.title}
            </h3>
            <p
              className=" font-serif text-hsl-219-13-44 text-md space-x-2 text-lg"
              dangerouslySetInnerHTML={{ __html: list.des }}
            />
            <span className=" text-hsl-342-100-50 text-lg  text-xl mt-2">
              {list.learnMore}
            </span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Features;
