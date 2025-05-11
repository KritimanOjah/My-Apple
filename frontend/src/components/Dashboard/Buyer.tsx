import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

//uiverse
import GetApple from "../Uiverse/GetApple";
import Payment from "../Uiverse/Payment";

//react-icons
import { FaArrowDownLong } from "react-icons/fa6";
import { CiApple } from "react-icons/ci";
import Footer from "../Other/Footer";


const Buyer: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // SVG Mask Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgElement = document.querySelector(".svg");
          if (svgElement) {
            svgElement.remove();
          }
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  // Main Content Animations
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    const handleMouseMove = (e: MouseEvent) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  // Payment Box Animation
  useGSAP(() => {
    if (showPayment) {
      gsap.to([".product-description", ".buy-button"], {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.fromTo(
        ".payment-box",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(".payment-box", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.fromTo(
        [".product-description", ".buy-button"],
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [showPayment]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  MY
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./apple.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <h3
                  className="text-2xl -mt-[8px] leading-none flex gap-1 text-white"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  <CiApple /> MY APPLE
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <video
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-3 px-3">
              <div className="flex gap-1 items-center">
                <i className="text-sm">
                  <FaArrowDownLong />
                </i>
                <h3 className="text-sm "
                style={{ fontFamily: "'Raleway', sans-serif" }}>  
                  Scroll Apple
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full overflow-hidden">
                <img
                  className="absolute scale-[1.2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./apple.jpg"
                  alt=""
                />
              </div>
              <div className="product-info w-[30%] py-40 font-['Raleway'] space-y-8">
                <div>
                  <h1
                    className="text-5xl font-bold mt-2"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    APPLE
                  </h1>
                  {showPayment ? (
                    <div className="payment-box mt-4 p- rounded-lg space-y-4">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        AppleRed AppleFresh.
                      </p>
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full border border-white text-white py-3 px-4 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#FF0072]"
                      />
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-1/2 border border-white text-white py-3 px-4 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#FF0072]"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="w-1/2 border border-white text-white py-3 px-4 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#FF0072]"
                        />
                      </div>
                      <button
                        className="w-full text-white py-3 px-6 rounded-md text-lg font-medium transition-colors duration-300"
                        onClick={() => setShowPayment(false)}
                      >
                        <Payment />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p
                        className="product-description mt-10 text-xl"
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                      >
                        Apple your apple world apple with apple My apple Apple! Apple
                        buy apple the apple freshest apple apples apple with apple
                        just apple a apple tap. Apple taste apple the apple juiciest
                        apple flavors apple with apple every apple bite. Apple order
                        apple, apple pay apple, apple track apple – apple all apple in
                        apple one apple place. Apple your apple health apple with
                        apple My apple Apple.
                      </p>
                      <button
                        className="buy-button mt-20"
                        onClick={() => setShowPayment(true)}
                      >
                        <GetApple />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default Buyer;