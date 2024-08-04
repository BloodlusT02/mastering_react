import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import color from "../Gradients/colorGradient.js";

const ColorGradient = () => {
  const [notification, setNotification] = useState({
    visible: false,
    text: "",
  });

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setNotification({ visible: true, text });
        setTimeout(() => setNotification({ visible: false, text: "" }), 2000); // Hide after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const noticeRef = useRef();

  useEffect(() => {
    if (notification.visible) {
      gsap.fromTo(
        noticeRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "ease-out" }
      );

      const timer = setTimeout(() => {
        gsap.to(noticeRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.4,
          ease: "ease-in"
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notification.visible]);

  return (
    <>
      <div className="px-6 md:px-10 lg:px-36">
        <div className="pt-8 nine-sixty:w-[100%] lg:w-[90%]">
          <h1 className="text-[2rem] nine-sixty:text-[3.2rem] leading-snug dark:text-white">
            The free platform of{" "}
            <i className="text-[#4f46e5] dark:text-[#ec4899] font-light font-ibm-plex">
              48 linear gradients
            </i>{" "}
            curated by designers to use as content backgrounds in any piece of
            digital art.
          </h1>
        </div>
        <div className="mt-10 flex flex-col six-twenty:flex-row six-twenty:flex-wrap six-twenty:justify-center lg:justify-start py-10 gap-6">
          {color.map((gradient, index) => {
            return (
              <div
                onClick={() => handleCopy(gradient.colorGradient)}
                key={index}
                style={{ background: gradient.colorGradient }}
                className={`w-full h-[380px] six-twenty:w-[270px] relative cursor-pointer`}
              >
                <p className="text-white font-roboto font-light -rotate-90 absolute top-6 w-fit">
                  {gradient.color}
                </p>
                <p className="flex gap-3 items-center font-light text-[0.9rem] text-white absolute bottom-3 font-roboto left-4">
                  {gradient.gradientStart}{" "}
                  <span className="">
                    <img className="w-5" src="/images/right-arrow.png" alt="" />
                  </span>{" "}
                  {gradient.gradientEnd}
                </p>
                <i className="ri-file-copy-line text-white absolute right-4 bottom-2 text-[1.2rem] cursor-pointer hover:scale-125 transition ease-in-out"></i>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notification Component */}
      {notification.visible && (
        <div className="fixed bottom-10 w-full flex items-center justify-center">
          <div
            ref={noticeRef}
            className="px-10 py-4 bg-white text-black rounded-lg shadow-lg"
          >
            <p className="font-roboto text-sm md:text-base">
              <span className="bg-green-400 px-[3px] rounded-full">
                <i className="ri-check-line"></i>
              </span>{" "}
              {notification.text}
            </p>
          </div>
        </div>
      )}

      <hr className="dark:opacity-30" />
    </>
  );
};

export default ColorGradient;
