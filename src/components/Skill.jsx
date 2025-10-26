import React from "react";
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/figma.svg`,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/css3.svg`,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/javascript.svg`,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/vuejs.svg`,
    label: "VueJS",
    desc: "Framework",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/golang.svg`,
    label: "Golang",
    desc: "Backend Language",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/firebase.svg`,
    label: "Firebase",
    desc: "database",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/react.svg`,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/tailwindcss.svg`,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/sql.svg`,
    label: "Sql",
    desc: "Database Language",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/lua.svg`,
    label: "Lua",
    desc: "Scripting Language",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/php.svg`,
    label: "PHP",
    desc: "Backend Language",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/bootstrap.svg`,
    label: "Bootstrap",
    desc: "User Interface",
  },
];
const Skill = () => {
  return (
    <section className="section" id="skill">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Tools I'm Learning as a Student Developer
        </h2>
        <p className=" text-zinc-300 mt-3 mb-8 max-w[50ch] reveal-up">
          These are the tools and technologies I'm currently exploring and
          mastering to build modern, responsive websites and applications on my
          journey to becoming a full stack developer.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
