'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LiaCarSideSolid } from "react-icons/lia";



const AnimatedComponent = () => {
  const carRef = useRef();

  useEffect(() => {
    gsap.to(carRef.current, {
      x: 300,    // Move the box 100px to the right
      duration: 5,    // Animation duration of 1 second
      backgroundColor:"#560563",
      borderRadius: "20%",
      rotation: 360,
      border: "5px solid white",
      ease: "power3.inOut"    // Easing function for smooth effect
    });
  }, []);

  return (
    <div  className="flex">
        <span ref={carRef}>
        <LiaCarSideSolid className="w-28 h-20" color="yellow"/>
        </span>
    </div>
  );
};

export default AnimatedComponent;
