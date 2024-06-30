// import React, { useEffect } from 'react'
// import ScrollTrigger from "gsap/ScrollTrigger";
// import gsap from 'gsap';
// gsap.registerPlugin(ScrollTrigger) 

// function Projects() {
//   return (
//     <section className=''>Projects</section>
//   )
// }

// import { useRef } from "react";

// export default Projects


// export default function App() {
//   const component = useRef<HTMLDivElement>(null);
//   const slider = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".panel");
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           scrub: 1,
//           end: () => "+=" + slider.current!.offsetWidth
//         }
//       });
//     }, component);
//     return () => ctx.revert();
//   });

//   return (
//     <div className="App" ref={component}>
//       <div className="firstContainer">
//         <h1>Testing horizontal scrolling w/ three sections</h1>
//         <h2>First Container</h2>
//       </div>
//       <div ref={slider} className="container">
//         <div className="description panel blue">
//           <div>
//             SCROLL DOWN
//             <div className="scroll-down">
//               <div className="arrow"></div>
//             </div>
//           </div>
//         </div>
//         <div className="panel red">ONE</div>
//         <div className="panel orange border-l-Foundation/Indigo/indigo-900">TWO</div>
//         <div className="panel purple bg-Foundation/Blue/blue-300">THREE</div>
//       </div>
//       <div className="lastContainer">Last Container</div>
//     </div>
//   );
// }

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const ProjectCard = () => {
  return (
    <>
      <div className="">
      <div className=" p-[1px] bg-gradient-to-t from-[#545356] via-[#9D6BFF] to-[#B8B6BC] flex items-center justify-center my-10 rounded-lg">
              <div className="bg-Foundation/Indigo/indigo-900 p-10 rounded-[calc(0.5rem-1px)]  w-[80vw] h-[30vh]">
               
              </div>
            </div>
      </div>
    </>
  )
}


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const noOfInsideDivs = 2;
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${((noOfInsideDivs - 1) * 100)}vw`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          snap: "labels",
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-Foundation/blue-dark/blue-dark-700">
      <div className=" flex flex-col items-center">
        <span className=" text-Foundation/Pastel-cyan/pastel-cyan-200 text-5xl font-semibold mt-6 text-center">
          Projects
        </span>
        <span className="text-Foundation/Pastel-cyan/pastel-cyan-200 text-lg font-light px-3 py-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut sequi hic quos officiis quisquam.
        </span>
      </div>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner w-[300vw] flex h-[100vh] flex-row relative">
          <div className="h-[100vh] w-screen flex flex-col items-center justify-center text-Foundation/Blue/blue-50">
            <ProjectCard />
            <ProjectCard />

          </div>
          <div className="h-[100vh] w-screen flex flex-col items-center justify-center text-Foundation/Blue/blue-50">
            <ProjectCard />
            <ProjectCard />
            {/* <h3>Section 2</h3> */}
          </div>
          {/* <div className="h-screen w-screen flex items-center justify-center">
            <h3>Section 3</h3>
          </div>
          <div className="h-screen w-screen flex items-center justify-center">
            <h3>Section 4</h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
