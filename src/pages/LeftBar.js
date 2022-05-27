import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const FacebookLogo = require("../assets/logos/FacebookLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const ReactIcon = require("../assets/logos/ReactLogo.png");
const LUAIcon = require("../assets/icons/LUAIcon.png");
const PictureIcon = require("../assets/icons/PictureIcon.png");
const CodeIcon = require("../assets/icons/CodeIcon.png");
const UnityIcon = require("../assets/icons/UnityIcon.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showDescList, SetShowDescList] = useState(true);
  const [showCodeList, SetShowCodeList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="https://spotipie-lymphocyte.surge.sh">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Spotipie</p>
        </div>
      </a>
      <a href="https://itrack-komsakorn.vercel.app/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={ReactIcon}
            alt="React Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>iTRACK (Prototype)</p>
        </div>
      </a>
      <a href="https://komsakorn.github.io/js-2048">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>2048 Game</p>
        </div>
      </a>
      <a href="https://modworkshop.net/user/60950">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={LUAIcon}
            alt="LUA Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>PAYDAY 2 Music Mod</p>
        </div>
      </a>
      <a href="https://github.com/Komsakorn/Basketball-game">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={UnityIcon}
            alt="Unity Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Magic Basketball</p>
        </div>
      </a>
    </div>
  );

  const DescList = () => (
    <div>
      <a href="https://imgur.com/a/4gqyWIG">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={PictureIcon}
            alt="PictureIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Spotipie</p>
        </div>
      </a>
      <a href="https://imgur.com/a/c5iz5S1">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={PictureIcon}
            alt="PictureIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>iTRACK (Prototype)</p>
        </div>
      </a>
      <a href="https://imgur.com/a/Bu2ZjZi">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={PictureIcon}
            alt="PictureIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>2048 Game</p>
        </div>
      </a>
      <a href="https://imgur.com/a/Dm8xsQ8">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={PictureIcon}
            alt="PictureIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>PAYDAY 2 Music Mod</p>
        </div>
      </a>
      <a href="https://imgur.com/a/16maxEo">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={PictureIcon}
            alt="PictureIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Magic Basketball</p>
        </div>
      </a>
    </div>
  );
  const CodeList = () => (
    <div>
      <a href="https://github.com/Komsakorn/jsd-jamming-assessment">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={CodeIcon}
            alt="CodeIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Spotipie</p>
        </div>
      </a>
      <a href="https://github.com/Komsakorn/New-iTrack">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={CodeIcon}
            alt="CodeIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>iTRACK (Prototype)</p>
        </div>
      </a>
      <a href="https://github.com/Komsakorn/js-2048">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={CodeIcon}
            alt="CodeIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>2048 Game</p>
        </div>
      </a>
      <a href="https://modworkshop.net/mod/32068#files">
        <div className="flex whitespace-wrap items-start hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={CodeIcon}
            alt="CodeIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>PAYDAY 2 Music Mod (Example : "Suspect")</p>
        </div>
      </a>
      <a href="https://github.com/Komsakorn/Basketball-game">
        <div className="flex whitespace-wrap items-start hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={CodeIcon}
            alt="CodeIcon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Magic Basketball</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Projects Webpage</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowDescList(!showDescList)}
            >
              {showDescList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Projects Screenshot</p>
            </div>
            {showDescList ? <DescList /> : null}
          </>
        ) : null}
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowCodeList(!showCodeList)}
            >
              {showCodeList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Projects Repository</p>
            </div>
            {showCodeList ? <CodeList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/komsakorn">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://www.facebook.com/komsakorn.jiarawish">
              <img
                src={FacebookLogo}
                alt="Facebook Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/komsakorn-j/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a
              href="mailto:komsakorn.j@hotmail.com"
              title="komsakorn.j@hotmail.com"
            >
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
