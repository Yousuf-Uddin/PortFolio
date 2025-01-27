import project1 from "@projects/Media/Projects/project1.png";
import project2 from "@projects/Media/Projects/project2.png";
import project3 from "@projects/Media/Projects/project3.png";
import react from "@projects/Media/Skills/React.png";
import tailwind from "@projects/Media/Skills/tailwindcss-mark.svg";
import github from "@projects/Media/Skills/Github.png";
import html from "@projects/Media/Skills/HTML5.png";
import css from "@projects/Media/Skills/CSS.png";
import js from "@projects/Media/Skills/JS.png";
import mongo from "@projects/Media/Skills/Mongodb.png";

function Projects() {
  return (
    <>
      <div className="bg-wave-top w-full  h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover "></div>
      <div className="bg-black">
        <h1 className="text-5xl font-bold text-gray-200 p-4">
          Featured Projects
        </h1>
        <div
          id="project1"
          className="grid my-8 grid-flow-row lg:grid-flow-col justify-center m-2 gap-3 place-self-center w-3/4 "
        >
          <div className="col-span-3 rounded-lg">
            <img
              src={project1}
              alt="project img"
              className="rounded-lg h-full"
            />
          </div>
          <div id="right" className="flex-col content-evenly col-span-2 ">
            <h2 className="font-[type1] text-xl font-semibold">
              My Recipe App
            </h2>

            <p className="text-justify my-2 px-2 leading-snug">
              I developed a responsive Recipe Tracking App using React and
              Tailwind CSS to enable users to save and manage recipes
              efficiently. This project demonstrates proficiency in front-end
              development and real-world problem-solving skills.
            </p>
            <div className="flex justify-center gap-2 m-2">
              <img src={react} alt="react.png" className="w-12 h-12" />
              <img src={tailwind} alt="Tailwind.png" className="w-12 h-12" />
              <img src={mongo} alt="mongo.png" className="w-12 h-12" />
              <img src={github} alt="github.png" className="w-12 h-12" />
            </div>

            <a
              href="https://yousuf-uddin.github.io/MyRecipe_App/"
              target="_blank"
            >
              <button className="bg-white text-black hover:bg-slate-700 border-none hover:text-white">
                View Live
              </button>
            </a>
            <a
              href="https://github.com/Yousuf-Uddin/MyRecipe_App/"
              target="_blank"
            >
              <button className="bg-white text-black hover:bg-slate-700 border-none hover:text-white mx-4 mt-0">
                Github Repo
              </button>
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div
          id="project2"
          className="grid my-8 grid-flow-row  lg:grid-flow-col justify-center py-10 gap-3  place-self-center w-3/4 "
        >
          <div className="flex-col content-evenly col-span-3">
            <h2 className="font-[type1] text-xl font-semibold">
              Weather Forecast App
            </h2>
            <p className="text-justify my-2 leading-snug px-4">
              Developed a dynamic Weather Forecast Application using React.js
              and Tailwind CSS, leveraging API integrations to fetch real-time
              weather data. Implemented responsive UI components to ensure a
              seamless user experience across devices, featuring detailed
              forecasts, current conditions, and location-based updates.
            </p>
            <div className="flex justify-center gap-2 m-2">
              <img src={react} alt="react.png" className="w-12 h-12" />
              <img src={tailwind} alt="Tailwind.png" className="w-12 h-12" />
              <img src={github} alt="github.png" className="w-12 h-12" />
            </div>
            <a
              href="https://yousuf-uddin.github.io/Weather-Forecast-App/"
              target="_blank"
            >
              <button className="bg-white text-black hover:bg-slate-700 border-none hover:text-white">
                View Live
              </button>
            </a>
            <a
              href="https://github.com/Yousuf-Uddin/Weather-Forecast-App"
              target="_blank"
            >
              <button className="bg-white text-black hover:bg-slate-700 border-none hover:text-white mx-4  ">
                Github Repo
              </button>
            </a>
          </div>
          <div className="col-span-3 ">
            <img
              src={project2}
              alt="project img"
              className="rounded-lg h-full"
            />
          </div>
        </div>
        {/* Project 3 */}
        <div
          id="project3"
          className="grid my-8 grid-flow-row lg:grid-flow-col justify-center m-2 gap-3 place-self-center w-3/4 "
        >
          <div className="col-span-10 rounded-lg pr-6">
            <img
              src={project3}
              alt="project img"
              className="rounded-lg h-full"
            />
          </div>
          <div id="right" className="flex-col content-evenly col-span-6  ">
            <h2 className="font-[type1] text-xl font-semibold">
              Password Generator App
            </h2>

            <p className="text-justify my-2 leading-snug">
              Developed a Random Password Generator application using Html/css
              and JS. The project includes features for customizable password
              length, inclusion of special characters, numbers, and
              uppercase/lowercase letters.
            </p>
            <div className="flex justify-center gap-2 mb-2">
              <img src={html} alt="html.png" className="w-12 h-12" />
              <img src={css} alt="css.png" className="w-12 h-12" />
              <img src={js} alt="js.png" className="w-12 h-12" />
            </div>

            <a
              href="https://yousuf-uddin.github.io/Password-Generator_React/"
              target="_blank"
            >
              <button className="bg-white text-black hover:bg-slate-700 border-none hover:text-white">
                View Live
              </button>
            </a>
            <a
              href="https://github.com/Yousuf-Uddin/Password-Generator_React"
              target="_blank"
            >
              <button className="bg-white text-black hover:bg-slate-700 border-none hover:text-white lg:mx-4 mx-2">
                Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-8"></div>
    </>
  );
}

export default Projects;
