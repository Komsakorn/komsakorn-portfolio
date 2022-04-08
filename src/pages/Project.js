import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Spotipie1 = require("../assets/project-pic/spotipie1.png");
const Spotipie2 = require("../assets/project-pic/spotipie2.png");
const iTRACK1 = require("../assets/project-pic/itrack1.png");
const iTRACK2 = require("../assets/project-pic/itrack2.png");
const JS_2048 = require("../assets/project-pic/2048.png");
const PAYDAY2_1 = require("../assets/project-pic/payday2-1.png");
const PAYDAY2_2 = require("../assets/project-pic/payday2-2.png");
const Project = () => {
  return (
    <div id="Project" className="mt-36">
      <div className="table mx-12 lg:mx-60">
      <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Projects
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="flex flex-row mx-12 lg:mx-60 lg:w-3/5 mt-6">
      <div><img src={Spotipie1}alt="Spotipie screenshot 1" className="w-4/5 mt-5" /></div>
      <div><img src={Spotipie2}alt="Spotipie screenshot 2" className="w-5/5 mt-5" /></div>
      </div>
      <div className="text-[#a2aabc] mt-5 mb-16 mx-12 lg:mx-60 flex flex-row items-center text-justify">
        <div className="flex flex-col">
            <code className="text-blue_vs mb-5 text-lg">• Spotipie</code>
            <code>
            Spotipie is an application made by JavaScript and integrated with Spotify API, which allows you to search for your favourite artist, songs or album and make your new music playlist in your Spotify account.
            </code>
        </div>
      </div>
      <div className="flex flex-row mx-12 lg:mx-60 lg:w-3/5">
      <div><img src={iTRACK1}alt="iTRACK screenshot 1" className="w-4/5 mt-5" /></div>
      <div><img src={iTRACK2}alt="iTRACK screenshot 2" className="w-4/5 mt-5" /></div>
      </div>
      <div className="text-[#a2aabc] mt-5 mb-16 mx-12 lg:mx-60 flex flex-row items-center text-justify">
        <div className="flex flex-col">
            <code className="text-blue_vs mb-5 text-lg">• iTRACK (Work In Progress)</code>
            <code>
            iTRACK is a combination between exercise application and social media, Built with React,CSS and keep the data with MongoDB, with iTRACK will allow you to reach out to others that loved to exercise like you and want to communicate or hang out together,
            Our activities board will show you the activities around you that you might want to participate in and discover another exercise lover, Then after the activity, you might wanna read and share your experience on our blog
            so other users can read and share their thought. Maybe you will find a person that you want to be the better you.
            </code>
        </div>
      </div>
      <div className="flex flex-row mx-12 lg:mx-60 lg:w-3/5">
      <div><img src={JS_2048}alt="2048 screenshot" className="w-3/5 mt-5" /></div>
      </div>
      <div className="text-[#a2aabc] mt-5 mb-16 mx-12 lg:mx-60 flex flex-row items-center text-justify">
        <div className="flex flex-col">
            <code className="text-blue_vs mb-5 text-lg">• JS-2048</code>
            <code>
            Have you ever played 2048 games, Here is a compact size one written in JavaScript.
            </code>
        </div>
      </div>
      <div className="flex flex-row mx-12 lg:mx-60 lg:w-3/5">
      <div><img src={PAYDAY2_1}alt="Payday2 mod screenshot 1" className="w-4/5 mt-5" /></div>
      <div><img src={PAYDAY2_2}alt="Payday2 mod screenshot 2" className="w-5/5 mt-5" /></div>
      </div>
      <div className="text-[#a2aabc] mt-5 mx-12 lg:mx-60 flex flex-row items-center text-justify">
        <div className="flex flex-col">
            <code className="text-blue_vs mb-5 text-lg">• PAYDAY 2 Custom Music Mod</code>
            <code>
            A modification of a famous game "PAYDAY 2" by Overkill Studio, This mod will allow you to add any music you like to the game as long as it fitted the game property, 
            it also can control the fade-in / fade-out effect of your music. Used LuaScript to hook to the game.
            </code>
        </div>
      </div>
    </div>
  );
};

export default Project;