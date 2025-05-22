import React from "react";
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/danzzlibrary.png",
    title: "Danzz Library",
    tags: ["FireBase", "React", "Timedoor Academy Project"],
    projectLink: "https://danzz-library.netlify.app/",
  },
  {
    imgSrc: "/images/yatratours.png",
    title: "Yatratours",
    tags: ["React", "PHP", "Tailwind css", "Development"],
    projectLink: "https://yatratours.world/home",
  },
  {
    imgSrc: "/images/linktree.png",
    title: "Linktree",
    tags: ["React", "Tailwind css"],
    projectLink: "https://linktree-ngurah-danuh-putra.netlify.app/",
  },
  {
    imgSrc: "/images/cyborglegends.png",
    title: "Cyborg Legends",
    tags: ["Phaser 3", "Javascript", "html", "css"],
    projectLink: "https://cyborglegends-ngurahdanuhputra.netlify.app/",
  },
];
const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
