import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Khyber Pakhtunkhwa Information Technology Board (KPITB)",
    date: "01/02/2024 - 23/10/2024",
    responsibilities: [
      "Learn HTML , CSS , BootStrap",
      "Participating in Small scale application.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "IT Artificer / IT Park Peshawar",
    date: "05/02/2025 - Present",
    responsibilities: [
      "Learning React Js and Tailwind Css.",
      "Help Team with their Web Application.",
      "Create Client Based Projects.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
