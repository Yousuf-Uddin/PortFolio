import Skills from "../Components/Skills";
import aboutImg from "../assets/Media/About.svg";

function About() {
  return (
    <div className="font-[type1] lg:pt-28 lg:pb-16 py-8">
      <h1 className="font-poppins text-2xl font-bold">ABOUT</h1>
      <p className="w-10/12 md:w-7/12 m-auto py-6 text-lg text-gray-400 font-light">
        I am a certified{" "}
        <b className="font-semibold text-slate-400">MERN Stack Developer</b>,
        Interested in roles like{" "}
        <b className=" font-semibold text-slate-400">
          Full-Stack-Web-Developer, Front-End-Developer, Web designer etc.
        </b>{" "}
        Project section speak a lot about my experiences & skillsets.
      </p>
      <img
        src={aboutImg}
        className="grayscale hover:filter-none transition-all duration-500 ease-in"
      />
      <Skills />
    </div>
  );
}

export default About;
