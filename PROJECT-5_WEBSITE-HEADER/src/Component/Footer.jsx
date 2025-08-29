import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-end items-center gap-10  px-50">
      <a
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-150 transition duration-1000 hover:animate-none animate-pulse"
      >
        <FaLinkedin size={30} color="#0A66C2" /> {/* LinkedIn Blue */}
      </a>

      <a
        href="https://github.com/BlockcodeChain"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-150 transition duration-1000 hover:animate-none animate-pulse"
      >
        <FaGithub size={30} color="#171515" /> {/* GitHub Black */}
      </a>

      <a
        href="https://www.instagram.com/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-150 transition duration-1000 hover:animate-none animate-pulse"
      >
        <FaInstagram size={30} color="#E1306C" /> {/* Instagram Pink */}
      </a>

      <a
        href="https://x.com/EGLIONFOX"
        target="_blank"
        rel="noopener noreferrer"
        className="transform hover:scale-150 transition duration-1000 hover:animate-none animate-pulse"
      >
        <FaTwitter size={30} color="#1DA1F2" /> {/* Twitter Blue */}
      </a>
    </div>
  );
};

export default Footer;
