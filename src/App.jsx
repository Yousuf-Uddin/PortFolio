/* eslint-disable no-unused-vars */
import "@/app.css";
import Lenis from "lenis";
import LandingPage from "@pages/LandingPage";
import Projects from "@pages/Projects";
import Footer from "@comp/Footer";
import About from "@pages/About";
import { useIsomorphicLayoutEffect } from "framer-motion";
import TitleAnimation from "@comp/TitleAnimation";
function App() {
  console.log(
    "%c Made with ❤️ by Yousuf Uddin",
    "color:black; background:white; font-size:20px; font-weight:bold; font-family:monospace; letter-spacing: 1px;padding:12px 20px; border-radius:13px;"
  );
  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      lerp: 0.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    //get scroll value

    lenis.on(
      "scroll",
      ({ scroll, limit, velocity, direction, progress }) => {}
    );

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <TitleAnimation />
      <LandingPage />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
