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
            developers working with me.
            <br />
            <br />I believe in creating a new feature or developing an
            application to solve issues. I will be able to see the core problem
            and find the best solution for it, such as a health emergency app
            that can give you the best possible first aid advice for the patient
            at that time, or a new feature of a bank app that can track your
            queues and shorten the wait time. I will make sure that the
            solutions work for the clients, as well as for the team and the
            company's success.
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
