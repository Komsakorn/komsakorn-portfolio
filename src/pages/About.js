import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const CSharpLogo = require("../assets/logos/CSharpLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const ExpressJsLogo = require("../assets/logos/ExpressJsLogo.png")
const CPlusLogo = require("../assets/logos/CPlusLogo.png")
const HTML5Logo = require("../assets/logos/HTML5Logo.png")
const GitVCLogo = require("../assets/logos/GitVCLogo.png")
const CSS3Logo = require("../assets/logos/CSS3Logo.png")
const BootstrapLogo = require("../assets/logos/BootstrapLogo.png")

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          Komsakorn used to work as an air traffic controller but chose to switch career paths
                        , Now looking for a full-time job in the gaming and coding field. 
                        So he will be able to apply the knowledge and skills he has in his works for continuous 
                        improvement.
          </code>
          <br />
          <br />
          <code>Notable Coding Skills:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
          <div className="flex flex-row  mb-3">
              <img
                src={HTML5Logo}
                alt="HTML5 Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>HTML5</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={CSS3Logo}
                alt="CSS3 Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>CSS3</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={BootstrapLogo}
                alt="Bootstrap Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Bootstrap</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ExpressJsLogo}
                alt="ExpressJs Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Express.js</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
              </div>
            <div className="flex flex-row  mb-3">
              <img
                src={CSharpLogo}
                alt="C# Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C#</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={CPlusLogo}
                alt="C++ Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>C++</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={GitVCLogo}
                alt="Git Version Control Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Git Version Control</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
