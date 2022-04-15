import React from "react";

function VisitCV() {
  window.location.href = "https://komsakorn.github.io/Komsakorn/";
}

function Header() {
  return (
    <div
      id="Header"
      className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">
          Komsakorn Jiarawish
        </code>
        <div className="text-[#a2aabc] text-lg mt-5 mx-12 flex flex-col items-center text-justify">
          <code>
            I'm a software developer from Thailand, based in Bangkok. I enjoy
            learning new things about coding that I didn't know before. My goal
            is to become a senior developer who will be reliable and supportive
            of my team. I would love to coach and mentor all of the junior
            developers working with me. I believe that I will be able to see the
            core problem and find the best solution for it with a new feature or
            an application such as a health emergency application that can give
            you the best possible first aid advice for the patient at that
            moment or a new feature of a bank application that can track your
            queue so you don't have to be in the row all the time.
          </code>
        </div>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
        onClick={VisitCV}
      >
        <code>Check out my CV !</code>
      </button>
    </div>
  );
}

export default Header;
