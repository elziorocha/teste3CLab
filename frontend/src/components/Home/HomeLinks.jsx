import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeLinks = () => {
  return (
    <section className="flex gap-6">
      <Link to="https://github.com/elziorocha/teste3CLab">
        <FaGithub
          className="size-12 bg-defaultWhite rounded-full p-1 cursor-pointer
          hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
        />
      </Link>
      <Link to="https://elziorochaportfoliov2.netlify.app/">
        <FaUserCircle
          className="size-12 bg-defaultWhite rounded-full p-1 cursor-pointer
          hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
        />
      </Link>
      <Link to="https://www.linkedin.com/in/elziorocha/">
        <FaLinkedin
          className="size-12 bg-defaultWhite rounded-md p-0.5 cursor-pointer
          hover:bg-defaultDark hover:text-defaultWhiteText transition-all duration-300"
        />
      </Link>
    </section>
  );
};

export default HomeLinks;
