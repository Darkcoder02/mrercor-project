import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from './logo.svg'; 

const CardSection = () => {
  const cardRef = useRef(null);

  return (
    <section id="cardSection" className="bg-black min-w-full min-h-screen">
      <div className="flex justify-center items-center h-screen p-32 text-white gap-16">
          <div>
          <p className="text-purple-300 text-xl pb-5">Workflow</p>
          <p className="text-7xl font-extrabold pb-6">
            Create at <br /> the speed <br /> of thought.{" "}
          </p>
          <p>
            Focus on your getting your thoughts out and crafting the best
            <br />
            message while Chronicle does the heavy lifting for you
          </p>
          </div>
          <div>
            <div class="container mx-auto flex text-white">
              <div class=" bg-[#141414] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <img src={logo}/>
                <h3 class=" mb-4 text-white text-center text-4xl font-bold">
                  A keyboard<br/> first experience.
                </h3>
                <p class="text-center text-xl text-gray-400">
                Powerful shortcuts and a keyboard-first <br/> workflow means you will get your finish line <br/> in no time
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
          <div className="absolute top-2/4 right-0 -translate-y-2/4 flex flex-col items-center gap-2 text-white">
            <span class="text-xs opacity-40">01</span>
              <div class="w-1 h-96 bg-[#232323] relative rounded-full overflow-hidden">
                <span class="absolute top-0 left-0 w-full bg-purple-400 rounded-full h-1"></span>
              </div>
              <span class="text-xs opacity-40">03</span>
          </div>
          </div>
        </div>
    </section>
  );
};

export default CardSection;
