import React from "react";
import BuyNow from "../Uiverse/BuyNow";

const Buy: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Column - Product Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <div className="relative w-190 h-190 md:h-[500px]  ">
          <video
                className=" top-0  left-0 w-full h-full object-cover"
                src="./bg.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="w-full md:w-[45%] space-y-8">
          <div>
            <span className="text-gray-400 text-lg font-light tracking-wider">
              APPLE STORE
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold mt-2"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              APPLE 
            </h1>
            <p className="text-2xl text-gray-300 mt-4">
             AppleRed AppleFresh. 
            </p>
          </div>

          

          <div className="pt-4">
            
            <button className="">
             <BuyNow/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
