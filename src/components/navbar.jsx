// import logo from "../assets/KevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 m-10" src={logo} alt="logo" />
        </div> */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/nikosalin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nikos-lafiotis-002781190"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
