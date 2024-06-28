"use client";

import { CiLocationOn } from "react-icons/ci";
import { LiaCoinsSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import logo from "../assets/download.png";
import adobe from "../assets/adobe.png";
import adobexd from "../assets/adobexd.png";
import figma from "../assets/figma.png";
export default function Jobpreview() {
  const job = {
    title: "Senior Product Designer",
    location: "Delaware, USA",
    payRange: "$300k-$400k",
    createdAt: "2024-06-28T08:37:33.975Z",
    status: "open",
    skills: ["Figma", "Adobe Illustrator", "Adobe XD"],
    language: ["English"],
    type: "Full time",
    experience: "3+ years of experience",
    description: {
      about: [
        "Handle the UI/UX design",
        "Work on latest web application design and trends",
        "Work on conceptualizing and visualizing",
        "Work on creating graphics and other graphic related works",
      ],
      benefits: ["Health Insurance", "Provident Fund"],
      schedule: ["Day Shift"],
      payTypes: ["Performance Bonus", "Yearly Bonus"],
      location: ["In Person"],
    },
    company: {
      name: "Atlassian",
      size: "1k to 2k Employees",
      type: "Private",
      sector: "Information Technolog,Infrastructure",
      funding: "Bootstrapped",
      founders: ["Scott Farquhar", "Mike Cannon-Brokes"],
      year: "2019",
    },
  };

  return (
    <>
      <main>
        <Section1
          title={job.title}
          location={job.location}
          payRange={job.payRange}
          status={job.status}
          date={job.createdAt}
        />
        <Section2
          skills={job.skills}
          language={job.language}
          type={job.type}
          experience={job.experience}
        />
        <Section3 description={job.description} />
        <Section4 company={job.company} />
      </main>
    </>
  );
}

function Section1(props) {
  return (
    <section className="px-6 border-b-2 border-gray-100 p-4">
      <div className="flex gap-3 items-center flex-nowrap">
        <h1 className="font-bold text-2xl text-light-gray3 whitespace-nowrap">
          {props.title}
        </h1>
        <div>
          <div className="w-1 h-1 bg-light-gray rounded-full"></div>
        </div>
        <span className="text-sm text-light-gray2">Posted 2 days ago</span>
        <div className="flex items-center gap-2 bg-lightest-green ring-2 ring-light-green rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-green rounded-full"></div>
          <span className="leading-none">Open</span>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1">
          <SlLocationPin className=" text-gray-500" />
          {props.location}
        </div>
        <div className="flex items-center gap-1">
          <LiaCoinsSolid className="text-lg text-gray-500" />
          {props.payRange}
        </div>
      </div>
    </section>
  );
}

function Section2(props) {
  return (
    <section className="px-6 border-b-2 border-gray-100 p-4 flex gap-12 md:gap-24">
      <div>
        <h5 className=" font-medium pb-2 text-light-gray2">Skills Required</h5>
        <div>
          <div className="flex items-center gap-2 border m-1 rounded-xl py-2 w-fit ps-2 pe-3 ">
            <img src={figma} alt="figma" className="w-4 rounded-md" />
            <p className="leading-none text-light-gray3">Figma</p>
          </div>
          <div className="flex items-center gap-2 border m-1 rounded-xl py-2 w-fit ps-2 pe-6">
            <img src={adobe} alt="figma" className="w-4 rounded-md" />
            <p className="leading-none text-light-gray3">Adobe Illustrator</p>
          </div>
          <div className="flex items-center gap-2 border m-1 rounded-xl py-2  w-fit ps-2 pe-6">
            <img src={adobexd} alt="figma" className="w-4 rounded-md" />
            <p className="leading-none text-light-gray3">Adobe X</p>
          </div>
       
        </div>
      </div>

      <div className=" font-bold text-light-gray2">
        <h5 className="font-medium pb-2 text-light-gray2">Preferred Language</h5>
        <p className="text-black">{props.language}</p>
      </div>
      <div className="font-medium pb-2  text-light-gray2">
        <h5>Type</h5>
        <p className="text-black">{props.type}</p>
      </div>
      <div className="font-medium pb-2  text-light-gray2">
        <h5>Years of Experience</h5>
        <p className="text-black">{props.experience}</p>
      </div>
    </section>
  );
}

function Section3(props) {
  return (
    <section className="px-6 border-b-2 border-gray-100 p-4 flex flex-col gap-2">
      <div>
        <h5 className="text-light-gray3 py-1">About the Job</h5>
        <ol className="list-decimal ml-9">
          {props.description.about.map((item, index) => (
            <li key={index} className="text-base">
              {item}
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h5 className="text-light-gray3 py-1">Benefits</h5>
        <ul className="list-disc ml-9">
          {props.description.about.map((item, index) => (
            <li key={index} className="text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-light-gray3 py-1">Schedule</h5>
        <ul className="list-disc ml-9">
          {props.description.schedule.map((item, index) => (
            <li key={index} className="text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-light-gray3 py-1">Pay Types</h5>
        <ul className="list-disc ml-9">
          {props.description.payTypes.map((item, index) => (
            <li key={index} className="text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-1">
        <h5 className="text-light-gray3 py-1">Work Location</h5>
        <p>:In person</p>
      </div>
    </section>
  );
}

function Section4(props) {
  return (
    <section className="px-6 p-4 py-7  ">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="w-12 rounded-md" />
        <p className="text-xl leading-none text-light-gray3">Atlassian</p>
      </div>
      <div className="flex py-5 gap-10">
        <div>
          <div className="pb-3">
            <h5 className="text-light-gray3 pb-1">Company Size</h5>
            <p className="font-medium">{props.company.size}</p>
          </div>
          <div className="pb-3">
            <h5 className="text-light-gray3 pb-1">Sector</h5>
            <p className="font-medium">{props.company.sector}</p>
          </div>
          <div className="pb-3">
            <h5 className="text-light-gray3 pb-1">Founded In</h5>
            <p className="font-medium">{props.company.year}</p>
          </div>
        </div>
        <div>
          <div className="pb-3">
            <h5 className="text-light-gray3 pb-1">Type</h5>
            <p className="font-medium">{props.company.type}</p>
          </div>
          <div className="pb-3">
            <h5 className="text-light-gray3 pb-1">Funding</h5>
            <p className="font-medium">{props.company.funding}</p>
          </div>
          <div className="pb-3">
            <h5 className="text-light-gray3 pb-1">Founded By</h5>
            <p className="font-medium">{props.company.founders}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
