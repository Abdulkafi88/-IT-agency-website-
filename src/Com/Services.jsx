import React ,{useState} from 'react'
import ServicesImg from "../assets/service-1.png"
const Services = () => {
    const [info, setindo] = useState([
      {
        offer: "Services We Offer",
        hook: "We are here, <br/> to help your startup business",
      },
    ])
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 bg-hsl-0-0%-96% xl:my-20 ">
        <div className="">
          <img
            className="ml-20 mt-12 w-80"
            src={ServicesImg}
            alt=" this is the service img "
          />
        </div>
        <div className="">
          {info.map((content, index) => (
            <div key={index}>
              <p className="text-hsl-219-13-44 mt-10  text-lg">
                {content.offer}
              </p>
              <h1
                className=" font-bold text-hsl-224-48-22 lg:text-5xl mt-5"
                dangerouslySetInnerHTML={{ __html: content.hook }}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services