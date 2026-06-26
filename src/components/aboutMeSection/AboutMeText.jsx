import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
   Hi, I'm Naqash Ahmad, a passionate Web Developer with over 2 years of experience building modern, responsive, and user-friendly web applications. I specialize in React.js, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS, with a strong focus on writing clean, efficient, and maintainable code. Alongside my technical expertise, I have 1 year of experience as an Assistant Manager, where I developed leadership, communication, and problem-solving skills while supporting business operations and team management. My background in both technology and business allows me to create digital solutions that not only provide excellent user experiences but also support business growth and strategic goals. I am committed to continuous learning, staying up to date with modern technologies, and delivering high-quality solutions that make a meaningful impact.


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
