import React from "react";
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/danzzlibrary.svg`,
    title: "Danzz Library",
    tags: ["FireBase", "React", "Timedoor Academy Project"],
    projectLink: "https://danzz-library.netlify.app/",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/yatratours.svg`,
    title: "Yatratours",
    tags: ["React", "PHP", "Tailwind css", "Development"],
    projectLink: "https://yatratours.world/home",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/linktree.svg`,
    title: "Linktree",
    tags: ["React", "Tailwind css"],
    projectLink: "https://linktree-ngurah-danuh-putra.netlify.app/",
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/cyborglegends.svg`,
    title: "Cyborg Legends",
    tags: ["Phaser 3", "Javascript", "html", "css"],
    projectLink: "https://cyborglegends-ngurahdanuhputra.netlify.app/",
  },
];
const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
