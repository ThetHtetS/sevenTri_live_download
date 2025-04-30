import Logo from "./assets/icon.png";
import Sample from "./assets/sample.png";
import Sample2 from "./assets/sample2.png";
import "./App.css";
import React from "react";

function App() {
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
      <div className="hidden md:flex flex-col w-screen h-screen ">
        <div className="flex h-25 items-center w-[100%] px-10 ">
          <div className="text-2xl font-bold flex text-center items-center gap-2">
            <img
              src={Logo}
              alt=""
              className="w-12 h-12  lg:w-17 lg:h-17  rounded-full"
            />
            <h3>BKK 6D</h3>
          </div>
        </div>
        <div className="w-[100%] h-screen  flex items-center justify-center"
        style={{ marginTop: -35 }}>
          <div className="flex flex-col-2 w-[70%]">
            <div className="flex  w-1/2 items-center lg:justify-center ">
              {/* <h2 className="text-3xl  font-bold text-center text-gray-800 mb-5">
                BKK 6D မှာ 2D 3D 6D result တွေကို  ကြည့်ရှုနိုင်ပါပြီ
              </h2> */}
              <div
                className="md:px-5 md:py-3 lg:px-9 lg:py-5  text-center rounded-2xl cursor-pointer text-white text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 shadow-lg hover:shadow-green-400/70 transition duration-300"
                onClick={handleDownload}
              >
                ဒေါင်းလုပ် ဆွဲပါ
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-1/2 items-center justify-center">
              <img
                src={Sample}
                alt=""
                className="lg:w-[250px] md:w-[200px] md:h-[450px] lg:h-[500px] object-cover rotate-3 shadow-lg shadow-green-400/70"
              />
              <img
                src={Sample2}
                alt=""
                className="lg:w-[250px] md:w-[200px] md:h-[450px] lg:h-[500px] object-cover rotate-3 shadow-lg shadow-green-400/70"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden w-screen h-screen  flex justify-center items-center">
        <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center">
          <img src={Logo} alt="" className="logo w-30 h-30 my-3" />
          <h1 className="font-bold my-4">BKK 6D</h1>
          <button className="my-4" onClick={handleDownload}>
            Download
          </button>
          <div className="flex gap-2 my-4">
            <img src={Sample} alt="" className="w-30 h-60"/>
            <img src={Sample2} alt="" className="w-30 h-60"/>
          </div>
          <p className="my-4 text-[14px]">
            Click Download button to download android.apk
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
