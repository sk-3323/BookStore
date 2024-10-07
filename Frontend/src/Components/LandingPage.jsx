import React, { useRef } from "react";
import book from "../assets/books.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const LandingPage = () => {
  const bookImg = useRef();

  useGSAP(() => {
    gsap.from(bookImg.current, {
      duration: 1.5,
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    const tl = gsap.timeline();
    gsap.from(".content h1,.content span,.content label,.content button,.img", {
      x: -100,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
    });
  });
  return (
    <>
      <div className="w-full flex justify-around items-center flex-wrap flex-row-reverse">
        <div className="lg:w-1/3 sm:w-full p-5 flex flex-col gap-5 order-last content">
          <h1 className="text-3xl font-extrabold text-zinc-600">
            <span className="text-blue-700">Hello</span>, Welcomes Here to Learn
          </h1>
          <h1 className="text-3xl font-extrabold text-zinc-600">
            Something <span className="text-pink-700">New Everyday</span>
          </h1>
          <span className="mt-3 font-serif">
            Libraries store the energy that fuels the imagination. They open up
            windows to the world and inspire us to explore and achieve, and
            contribute to improving our quality of life.
          </span>
          <label className="rounded-lg input input-bordered flex items-center gap-2 mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-secondary w-1/3 rounded-full">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/3 sm:w-full flex justify-center items-center img">
          <img
            src={book}
            alt="unavailable"
            height={400}
            width={400}
            ref={bookImg}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
