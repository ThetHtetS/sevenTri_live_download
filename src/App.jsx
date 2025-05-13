import React from "react";
import Logo from "./assets/icon.png";
import "./App.css";
import Loader from "./components/Loader";
import LoaderA from "./components/LoaderA";
import LoaderB from "./components/LoaderB";
import LoaderC from "./components/LoaderC";
import front from "./assets/front.png";
import back from "./assets/back.png";


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
    <div className="bg-gradient-to-br from-[#4d4d4d] to-[#1a1a1a] h-screen w-full overflow-y-auto">
        <div className="flex items-center lg:pl-20 md:pl-20 pl-10 gap-4 h-[15vh] pt-5 ">
          <div className="mt-4">
            <LoaderC />
          </div>
          <h1 className="font-bold text-[#f9d51f] md:text-2xl text-1xl">BKK 6D</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between h-screen md:h-[85vh] w-full overflow-hidden">
          <div className="relative flex flex-col justify-center items-center h-full w-full">
            <div className="-mt-40 flex flex-col gap-12 justify-center items-center">
              <LoaderA />
              <Loader />
            </div>
            <div className="absolute top-0 left-0 h-full w-full z-50">
              <button
                onClick={handleDownload}
                className="absolute bottom-4 md:bottom-24 left-1/2 transform -translate-x-1/2 bg-[#D2A410] hover:bg-amber-600 hover:text-white text-[#1F2127] font-bold py-3 px-6 rounded-xl cursor-pointer hover:shadow-2xl transition duration-300 shadow-amber-500"
              >
                Download Now
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <div className="flex justify-center items-center h-[80%] w-[80%] relative">
              <img src={back} alt="" className="absolute w-full h-full object-contain ml-32 -mt-6" />
              <img src={front} alt="" className="absolute w-full h-full object-contain -ml-32 mt-6 z-10"/>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default App;
