import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Portfolio Website",
    year: "jan 2025",
    align: "right",
    image: "../src/images/website-img-3.png",
    link: "#",
  },
  {
    name: "Food Villa",
    year: "june 2025",
    align: "left",
    image: "../src/images/website-img-1.png",
    link: "https://food-villa-woad.vercel.app/",
  },
  {
    name: "E-Fashion-MaleWare",
    year: "Dec 2025",
    align: "right",
    image: "../src/images/website-img-2.png",
    link: "https://e-fashion-mela-wear.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
