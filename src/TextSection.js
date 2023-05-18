import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const TextSection = () => {
  const hiddenParagraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#textSection',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 0.75
      },
    });

    const words = hiddenParagraphRef.current.querySelectorAll('span');
    
    
    tl.fromTo(
      words,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <section id="textSection" className="bg-black w-full h-screen">
      <div className="flex justify-center items-center h-screen pl-32 pr-64 mr-12">
        <div className="relative text-6xl">
          <p className="text-white font-semibold absolute" ref={hiddenParagraphRef}>
            <span className="opacity-0">In</span>{" "}
            <span className="opacity-0">Chronicle</span>{" "}
            <span className="opacity-0">everything</span>{" "}
            <span className="opacity-0">is</span>{" "}
            <span className="opacity-0">made</span>{" "}
            <span className="opacity-0">with</span>{" "}
            <span className="opacity-0">Blocks</span>{" "}
            <span className="opacity-0">that</span>{" "}
            <span className="opacity-0">come</span>{" "}
            <span className="opacity-0">with</span>{" "}
            <span className="opacity-0">pixel</span>{" "}
            <span className="opacity-0">perfect</span>{" "}
            <span className="opacity-0">design,</span>{" "}
            <span className="opacity-0">interactivity</span>{" "}
            <span className="opacity-0">and</span>{" "}
            <span className="opacity-0">motion</span>{" "}
            <span className="opacity-0">out</span>{" "}
            <span className="opacity-0">of</span>{" "}
            <span className="opacity-0">the</span>{" "}
            <span className="opacity-0">box.</span>{" "}
            <span className="opacity-0">Instead</span>{" "}
            <span className="opacity-0">of</span>{" "}
            <span className="opacity-0">designing</span>{" "}
            <span className="opacity-0">from</span>{" "}
            <span className="opacity-0">scratch,</span>{" "}
            <span className="opacity-0">simply</span>{" "}
            <span className="opacity-0">choose</span>{" "}
            <span className="opacity-0">the</span>{" "}
            <span className="opacity-0">right</span>{" "}
            <span className="opacity-0">one</span>{" "}
            <span className="opacity-0">from</span>{" "}
            <span className="opacity-0">our</span>{" "}
            <span className="opacity-0">library</span>{" "}
            <span className="opacity-0">of</span>{" "}
            <span className="opacity-0">blocks</span>{" "}
            <span className="opacity-0">and</span>{" "}
            <span className="opacity-0">see</span>{" "}
            <span className="opacity-0">the</span>{" "}
            <span className="opacity-0">magic</span>{" "}
            <span  className="opacity-0">unfold.</span>
          </p>
          <p id="visible" className="text-gray-400 font-semibold">
            <span>In</span> <span>Chronicle</span> <span>everything</span>{" "}
            <span>is</span> <span>made</span> <span>with</span>{" "}
            <span>Blocks</span> <span>that</span> <span>come</span>{" "}
            <span>with</span> <span>pixel</span> <span>perfect</span>{" "}
            <span>design,</span> <span>interactivity</span> <span>and</span>{" "}
            <span>motion</span> <span>out</span> <span>of</span>{" "}
            <span>the</span> <span>box.</span> <span>Instead</span>{" "}
            <span>of</span> <span>designing</span> <span>from</span>{" "}
            <span>scratch,</span> <span>simply</span> <span>choose</span>{" "}
            <span>the</span> <span>right</span> <span>one</span>{" "}
            <span>from</span> <span>our</span> <span>library</span>{" "}
            <span>of</span> <span>blocks</span> <span>and</span>{" "}
            <span>see</span> <span>the</span> <span>magic</span>{" "}
            <span>unfold.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
