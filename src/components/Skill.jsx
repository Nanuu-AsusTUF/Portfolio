import React from "react";
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/vuejs.svg",
    label: "VueJS",
    desc: "Framework",
  },
  {
    imgSrc: "/images/golang.svg",
    label: "Golang",
    desc: "Backend Language",
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/sql.svg",
    label: "Sql",
    desc: "Database Language",
  },
  {
    imgSrc: "/images/lua.svg",
    label: "Lua",
    desc: "Scripting Language",
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Backend Language",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
];
const Skill = () => {
  return (
    <section className="section" id="skill">
      <div className="container">
        <h2 className="headline-2">
          Tools I'm Learning as a Student Developer
        </h2>
        <p className=" text-zinc-300 mt-3 mb-8 max-w[50ch]">
          These are the tools and technologies I'm currently exploring and
          mastering to build modern, responsive websites and applications on my
          journey to becoming a full stack developer.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
