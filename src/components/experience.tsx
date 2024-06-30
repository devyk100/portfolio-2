import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";
// import { DrawSVGPlugin } from "gsap/all";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin";
// import { DrawSVGPlugin } from "gsap/all";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// import * as DrawSVGPlugin from "./gsap"
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin)
interface SquareWaveProps {
  amplitude: string; // Accepts values like "50vh", "10vw", etc.
  frequency: number;
  repetitions: number;
  strokeWidth?: number;
  width: string; // Accepts values like "100vw", "80%", etc.
  height: string; // Accepts values like "100vh", "50%", etc.
  color: string;
  id? :string;
  pathRef?: any
}
const SquareWave: React.FC<SquareWaveProps> = ({
  amplitude,
  frequency,
  repetitions,
  strokeWidth = 1,
  width,
  height,
  color,
  id,
  pathRef
}) => {
  const parseUnit = (value: string) => {
    const match = value.match(/(\d+)(\D+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      const unit = match[2];
      return { num, unit };
    }
    return { num: 0, unit: 'px' };
  };

  const parsedAmplitude = parseUnit(amplitude);
  const parsedWidth = parseUnit(width);
  const parsedHeight = parseUnit(height);

  const convertToPixels = (value: number, unit: string, dimension: number) => {
    if (unit === 'vw') {
      return (value / 100) * dimension;
    } else if (unit === 'vh') {
      return (value / 100) * dimension;
    } else {
      return value;
    }
  };

  const amplitudeInPixels = convertToPixels(parsedAmplitude.num, parsedAmplitude.unit, window.innerHeight);
  const widthInPixels = convertToPixels(parsedWidth.num, parsedWidth.unit, window.innerWidth);
  const heightInPixels = convertToPixels(parsedHeight.num, parsedHeight.unit, window.innerHeight);

  const segmentWidth = widthInPixels / repetitions;
  const segmentHeight = heightInPixels / repetitions;
  const halfAmplitude = amplitudeInPixels / 2;

  const pathData = [];

  for (let i = 0; i <= repetitions; i++) {
    const x = i % 2 === 0 ? halfAmplitude : -halfAmplitude; // Alternate peaks and troughs
    const y = i * segmentHeight;
    const command = i === 0 ? 'M' : 'L'; // Move to or Line to
    pathData.push(`${command}${x},${y}`);
  }

  const pathString = pathData.join(' ');

  return (
    <svg
      width={width}
      height={height}
      viewBox={`-${halfAmplitude} 0 ${widthInPixels} ${heightInPixels}`}
      style={{ overflow: 'visible' }} // Adjust overflow as needed
    >
      <path d={pathString} id={id} fill="none" stroke={color} strokeWidth={strokeWidth} ref={pathRef}/>
    </svg>
  );
};


const MyComponent: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null)
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      console.log("Path length:", length);
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "sine",
        scrollTrigger: {
          trigger: "#scrollId",
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=700', // end after scrolling 500px beyond the start
  
          scrub: true,
          markers: true,

        },
        duration: 1
      });
    }
  }, []);


  return (
    <section className="relative bg-Foundation/blue-dark/blue-dark-700 h-[200vh] w-screen" id="scrollId">
    <div className="ml-10 absolute top-0 left-0 bg-Foundation/blue-dark/blue-dark-700 z-40">
      <SquareWave
        amplitude="9vh"   // Adjust the amplitude (height) of the wave using vh
        frequency={1}       // Adjust the frequency of the wave
        repetitions={10}    // Adjust the number of repetitions
        strokeWidth={5}     // Adjust the stroke width of the wave
        width="100vw"        // Adjust the total width of the SVG using vw
        height="100vh"       // Adjust the total height of the SVG using vh
        color="#bdd8ff"
        id="path2"
        pathRef={pathRef}
        />
    </div>
        </section>
  );
};

export default MyComponent;