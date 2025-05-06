// export default App;
import React from "react";
import Logo from "./assets/icon.png";
import { FaDownload } from "react-icons/fa";
import One from "./assets/1.png";
import Two from "./assets/2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => {

  const handleDownload = () => {
    const downloadUrl =
      "https://firebasestorage.googleapis.com/v0/b/seventri-fd94d.firebasestorage.app/o/application-ee7da1f8-1c68-4752-a26b-9ddfae72294f.apk?alt=media&token=7989d9df-c001-49e0-b420-8e1efebc441d";

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "your-file.jpg"; // You can set the file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="bg-[url('./assets/bg.png')] bg-cover  lg:h-auto h-screen">
        <div className="flex items-center lg:pl-20 md:pl-20 pl-10 gap-4 h-25 pt-5">
          <img
            src={Logo}
            alt=""
            className="lg:w-18 lg:h-18 md:w-18 md:h-18 w-12 h-12  rounded-full shadow-md shadow-amber-300"
          />
          <h1 className="font-bold text-[#f9d51f] md:text-2xl text-1xl">BKK 6D</h1>
        </div>
        <div className="flex lg:h-screen  lg:justify-evenly flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center md:mt-20 lg:mt-0 ">
          <div className="text-primary lg:w-[35%] p-4 flex flex-col items-center justify-center md:items-center lg:items-start md:justify-center lg:justify-items-start me-10 md:me-0 md:mt-10 mt-5 lg:mt-0">
            <h1 className="font-bold md:text-2xl  ml-10 lg:leading-16 md:leading-16 leading-8 flex text-center lg:text-start  text-[#f9d51f] ">
              BKK 6D မှာ 2D 3D 6D resultတွေကိုကြည့်ရှုနိုင်ပါပြီ
            </h1>
            <div className="ml-10 mt-7  md:mt-10 text-center lg:text-left mb-5 md:mb-0">
              <div
                onClick={handleDownload}
                className="w-[150px] h-[30px] font-bold text-lg bg-primary  bg-[#f9d51f] px-20 py-5 rounded flex items-center justify-center gap-3"
              >
                Download{" "}
                <span>
                  <FaDownload />
                </span>{" "}
              </div>
            </div>
          </div>
          {/* Carousel for mobile*/}
          {/* <div className='block md:hidden w-64'>
                    <Carousel
                        showArrows={false}
                        showStatus={false}
                        showThumbs={false}
                        swipeable={true}
                        interval={3000}
                        autoPlay
                        infiniteLoop
                        className='carousel-container'
                    >
                        <div>
                            <img src={Two} alt="Home Logo" className='w-full object-cover' />
                        </div>
                        <div>
                            <img src={One} alt="Onboarding" className='w-full object-cover' />
                        </div>
                        
                    </Carousel>
                </div> */}
          {/* Tablet and PC */}
          <div className="flex lg:h-screen gap-2 justify-center items-center lg:flex-wrap md:flex-wrap mx-10 mt-10 md:mt-0">
            <img
              src={Two}
              alt=""
              className="md:w-52 lg:w-52   w-32 lg:rounded-[30px] md:rounded-[30px] rounded-[20px]"
            />
            <img
              src={One}
              alt=""
              className="md:w-60 lg:w-60 w-36 lg:rounded-[36px] md:rounded-[36px] rounded-[24px]"
            />
            {/* <img src={Onboarding} alt="" className='w-52' /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
