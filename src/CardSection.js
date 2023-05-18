import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import logo from "./logo.svg";

const CardSection = () => {
  const cardref = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:'#cardSection',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true
      }
    })
    tl.fromTo('#bar',{
      height:0
    },{
      height: 133
    })
    tl.fromTo('#card-1',
    {
      yPercent:0
    }
    ,{
      yPercent:100,
      scale: 0.5,
      opacity:0,
      stagger:1,
    });
    tl.fromTo('#card-2',
    {
      yPercent:100,
      opacity: 0,
      scale:0.5
    }
    ,{
      yPercent:0,
      opacity:1,
      scale:1,
      stagger:1
    });
    tl.fromTo('#bar',{
      height:133
    },{
      height:266
    })
    tl.fromTo('#card-2',
    {
      yPercent:0,
      opacity:1,
      scale:1
    }
    ,{
      yPercent:100,
      opacity:0,
      scale:0.5,
      stagger:1,
    });
    tl.fromTo('#card-3',
    {
      yPercent:100,
      opacity: 0,
      scale:0.5
    }
    ,{
      yPercent:0,
      opacity: 1,
      scale:1,
      stagger:1,
    });
    tl.fromTo('#bar',{
      height:266
    },{
      height:400
    })
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  },[]);

  return (
    <section id="cardSection" className="bg-black min-w-full min-h-screen overflow-hidden">
      <div className="flex justify-center items-center h-screen p-32 text-white gap-16">
        <div id="left_text">
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

        <div ref={cardref} id="cards" className="h-[70vh] w-[40%] m-auto relative flex-col items-center">
          <div ref={card1} id="card-1" className="absolute bg-[#141414] flex-col justify-center items-center mb-[50px] left-0 top-0 p-8 text-center rounded-lg">
            <img src={logo} alt="Logo" />
            <h2 className="mb-4 text-white text-center text-4xl font-semibold">A keyboard<br/> first experience.</h2>
            <p className="text-center text-xl text-gray-400">Powerful shortcuts and a keyboard-first workflow means you will get your finish line in no time</p>
          </div>
          <div ref={card2} id="card-2" className= "absolute bg-[#141414] flex-col justify-center items-center mb-[50px] left-0 top-0 p-8 text-center rounded-lg">
            <img src={logo} alt="Logo" />
            <h2 className="mb-4 text-white text-center text-4xl font-semibold">Bullets to visuals <br />in a click.</h2>
            <p className="text-center text-xl text-gray-400">Transform any block to any other and try different options without any design hassle</p>
          </div>
          <div ref={card3} id="card-3" className=" absolute bg-[#141414] flex-col justify-center items-center mb-[50px] left-0 top-0 p-8 text-center rounded-lg">
            <img src={logo} alt="Logo" />
            <h2 className="mb-4 text-white text-center text-4xl font-semibold">A powerful assistant <br/>just a click away</h2>
            <p className="text-center text-xl text-gray-400">Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard</p>
          </div>
        </div>


        <div id="scrollbar" className="relative">
          <div className="absolute top-2/4 right-0 -translate-y-2/4 flex flex-col items-center gap-2 text-white">
            <span class="text-xs opacity-40">01</span>
            <div class="w-1 h-96 bg-[#232323] relative rounded-full overflow-hidden">
              <span id="bar" class="absolute top-0 left-0 w-full bg-purple-400 rounded-full h-full"></span>
            </div>
            <span class="text-xs opacity-40">03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
