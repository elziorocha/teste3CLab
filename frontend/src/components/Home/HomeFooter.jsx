import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <section className="w-full text-center bg-primary py-4">
      <div className="flex justify-center items-center gap-2">
        <h2 className="italic text-defaultWhiteText text-lg">
          @copyright for elziorocha, 2025 | available at my personal portfolio:
        </h2>
        <Link
          to="https://elziorochaportfoliov2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUserCircle
            className="size-8 bg-defaultWhite rounded-full p-0.5 cursor-pointer
          hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
          />
        </Link>
      </div>
    </section>
  );
};

export default HomeFooter;
