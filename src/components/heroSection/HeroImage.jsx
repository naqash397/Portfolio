import { PiHexagonThin } from "react-icons/pi";
import heroPic from "../../images/hero-pic.JPEG";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full flex items-center justify-center">
      <img
        src={heroPic}
        alt="Naqash Ahmad"
        className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] z-10"
      />

      <div className="absolute -z-10 flex justify-center items-center">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70 animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroImage;
