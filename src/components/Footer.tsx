import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a2421] border-b-2 border-t-2 border-gray-800 rounded-tr-[50px] md:rounded-tr-[90px] bg-gradient-to-l from-[#171616] to-[#000] p-6 md:p-8 flex flex-col justify-center">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between  items-center  text-white">
        {/* Left Section: Name & Contact */}
        <div className="text-center md:text-left">
          <h2 className="font-third text-gray-400 text-lg">Vivek Kumar</h2>
          <p className="text-gray-400 font-third text-sm">Full Stack Developer</p>
          <div className="flex items-center gap-2 mt-1 justify-center  md:justify-start">
            <FaPhone className="text-green-500 mb-3" />
            <p className="text-gray-300 font-third underline text-sm mb-3">+91 8545056990</p>
          </div>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-gray-400 transition">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-gray-400 transition">
              <FaLinkedin className="w-6 h-6 text-blue-500" />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="hover:text-gray-400 transition">
              <FaInstagramSquare className="w-6 h-6 text-pink-600" />
            </a>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-600">
            <FaEnvelope className="text-red-600" />
            <p className="text-gray-300 font-serif text-sm">virajshekar008@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        <p className="font-first mb-2">Innovating one project at a time</p>
        <p className="font-third">© {new Date().getFullYear()} Vivek Kumar. All Rights Reserved.</p>
        <hr className="w-[40%] mx-auto mt-2 border-gray-700" />
      </div>
    </footer>
  );
};

export default Footer;
