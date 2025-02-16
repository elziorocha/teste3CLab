import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeLinks = () => {
  return (
    <section className="flex gap-6">
      <Link
        to="https://github.com/elziorocha/teste3CLab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon-links rounded-full p-1" />
      </Link>
      <Link
        to="https://elziorochaportfoliov2.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaUserCircle className="icon-links rounded-full p-1" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/elziorocha/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon-links rounded-md p-0.5" />
      </Link>
    </section>
  );
};

export default HomeLinks;
