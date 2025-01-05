import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const RotatingCircle = () => {
  const circleRef = useRef("");

  useEffect(() => {
    // Create a GSAP animation for continuous rotation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 3,
      repeat: -5,
      ease: "linear",
    });
  }, []);

  return (
    <div className="inline-flex justify-center align-middle">
      <div
        ref={circleRef}
        className="w-4 h-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full shadow-md"
      ></div>
    </div>
  );
};

export default RotatingCircle;
