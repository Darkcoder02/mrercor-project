import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CardSection = () => {
  const cardRef = useRef(null);

  return (
    <section id="cardSection" className="bg-black w-full h-screen">
      <div className="flex justify-center items-center h-screen p-32 text-white">
        <div className="flex gap-16 justify-between">
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
          <div class="container  mx-auto flex text-white">
            <div class=" bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <p class="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
