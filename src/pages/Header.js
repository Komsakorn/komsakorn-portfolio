import React from "react";

function VisitCV(){
  window.location.href="https://komsakorn.github.io/Komsakorn/";
}

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Komsakorn Jiarawish</code>
        <div className="text-[#a2aabc] text-lg mt-5 mx-12 flex flex-col items-center text-justify">
        <code>
        I'm a software developer from Thailand, Currently lived in Bangkaen, Bangkok. 
        I love and like to discover all of the coding knowledge that I never knew before. 
        My goal is to become a senior developer that reliable and easy to reach for all of my new junior developers.
        </code>
      </div>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
        onClick={VisitCV} >
        <code>Check out my CV !</code>
      </button>
    </div>
  );
}

export default Header;
