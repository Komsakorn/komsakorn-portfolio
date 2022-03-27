import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Ramkhamhaeng University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Bachelor's degree, Faculty of Humanities, Majored in English.
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2018-2022
            </code>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Civil Aviation Training Center</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Bachelor's degree, Aviation Management, Majored in Air Traffic Management.
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2017-2020
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Air Traffic Controller Internship</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Kamphaengsaen Flying Training School{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Oct 2020 - Jan 2021 </code>
            <br />
            <code className="text-sm">
              <br />• Provided separation between aircraft by communicating with pilots on VHF Radio.
              <br />• Co-ordinated with other units when the information is required or need to be transmitted by telephone and handheld radio.
              <br />• Gave Aircraft instruction and ATC Clearance.
              <br />•	Inspected runway and taxiway to prevent a FOD.
              <br />• Used Radar to observe and monitor the aircraft within the responsible areas including danger areas to prevent an accident.
              <br />• Accepted and Re-check the flight plan from the pilot before submit to the Flight Data Management Centre.
              <br />• Using a computer to record the NOTAM and Flight statistic.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Interpersonal Skills.
              <br />(Growth Mindset, Persistance,
                Personal Responsibility, Proactiveness, Teamwork)
              <br />• Media Skills
              <br />(VEGAS, Photoshop, Audacity)
              <br />• Animation Skills
              <br />(Blender, SFM)
              <br />• Others
              <br />(Scratch, RPG Maker, Unity, Unreal Engine, Microsoft Office) 
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
