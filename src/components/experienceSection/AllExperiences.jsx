import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Khyber Pakhtunkhwa Information Technology Board (KPITB)",
    date: "30/04/2025 - 30/10/2025",
    responsibilities: [
      "Built responsive web interfaces.",
      "Developed frontend features",
      "Fixed bugs and improved performance.",
      "Collaborated with the development team.",
    ],
  },
  {
    job: "Assistant Manager",
    company: "IT Artificer / IT Park Peshawar",
    date: "05/11/2024 - Present",
    responsibilities: [
      "Coordinated clients and development teams.",
      "Managed project timelines and team tasks.",
      "Communicated project updates with stakeholders.",
      "Improved team workflow and productivity",
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
