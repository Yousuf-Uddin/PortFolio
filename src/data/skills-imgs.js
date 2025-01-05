import insert from "./generateIDs";

import ImageSkillsHTML5 from "/src/assets/Media/Skills/HTML5.png";
import ImageSkillsCSS3 from "/src/assets/Media/Skills/CSS.png";
import ImageSkillsJavaScript from "/src/assets/Media/Skills/JS.png";
import ImageSkillsReactJS from "/src/assets/Media/Skills/React.png";
import ImageSkillsNodeJS from "/src/assets/Media/Skills/Node.png";
import ImageSkillsExpressJS from "/src/assets/Media/Skills/Express-js.png";
import ImageSkillsMongoDB from "/src/assets/Media/Skills/Mongodb.png";
import ImageSkillsGithub from "/src/assets/Media/Skills/Github.png";


const skillsImages = [
  {
    imageSrc: ImageSkillsHTML5,
    imageAlt: "HTML5",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "150",
  },
  {
    imageSrc: ImageSkillsCSS3,
    imageAlt: "CSS3",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "300",
  },
  {
    imageSrc: ImageSkillsJavaScript,
    imageAlt: "JavaScript",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "450",
  },
  {
    imageSrc: ImageSkillsReactJS,
    imageAlt: "React JS",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "600",
  },
  {
    imageSrc: ImageSkillsNodeJS,
    imageAlt: "Node JS",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "750",
  },
  {
    imageSrc: ImageSkillsExpressJS,
    imageAlt: "Express JS",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "900",
  },
  {
    imageSrc: ImageSkillsMongoDB,
    imageAlt: "Mongo DB",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "1050",
  },
  {
    imageSrc: ImageSkillsGithub,
    imageAlt: "Github",
    dataAOS: "zoom-out",
    dataAOSDuration: "500",
    dataAOSDelay: "1200",
  },
];

(() => insert(skillsImages))();

export default skillsImages;