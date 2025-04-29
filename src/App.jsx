import Logo from "./assets/icon.png";
import Sample from "./assets/sample.png";
import Sample2 from "./assets/sample2.png";
import './App.css';
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
      <div className="hidden md:flex flex-column w-[100%] h-screen justify-content-center align-items-center">
        <div className="flex h-15 items-center px-5 sm:px-10 lg:px-20 pt-7">
          <div className="text-4xl font-bold text-yellow-400">
            <img
              src={Logo}
              alt=""
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 mt-5 rounded-full"
            />
          </div>
        </div>
        <div className="flex ">
          <div className="md:w-[50%] lg:w-[45%] flex items-center ">
            <div className="md:px-5 md:py-3 lg:px-9 lg:py-5  text-center rounded-2xl cursor-pointer text-white text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-green-400 shadow-lg hover:shadow-green-400/70 transition duration-300"
            onClick={handleDownload}
            >
              ဒေါင်းလုပ် ဆွဲပါ
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:mt-10 md:w-[50%] lg:w-[55%] items-center justify-center">
            <img
              src={Sample}
              alt=""
              className="w-[150px] sm:w-[200px] lg:w-[250px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover rotate-5 shadow-lg shadow-green-400/70"
            />
            <img
              src={Sample2}
              alt=""
              className="w-[150px] sm:w-[200px] lg:w-[250px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover rotate-5 shadow-lg shadow-green-400/70"
            />
          </div>
        </div>
      </div>
      <div className=" md:hidden w-screen h-screen  flex justify-center items-center">
        <div className="w-[100%] flex flex-col items-center justify-center">
          <img src={Logo} alt="" className="logo w-30 h-30 my-3" />
          <h1 className="font-bold my-4">BKK 6D</h1>
          <button className="my-4" onClick={handleDownload}>Download</button>
          <p className="my-4 text-[14px]">
            Click Download button to download android.apk
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
