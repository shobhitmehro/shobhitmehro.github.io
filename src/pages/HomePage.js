import React from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import Experience from "../components/Experience";
import { FaFileAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import resume from "../data/resume.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { techIcons } from "../constants/icons";
import TechIcon from "../components/TechIcon";

function HomePage() {
  return (
    <div className="bg-stone-50 min-h-screen flex justify-center px-6 md:px-20">
      <div className="max-w-3xl w-full">
        <Header />
        <section className="mt-5">
          <h1 className="text-3xl font-semibold text-gray-800">
            Shobhit Mehrotra
          </h1>
          <div className="flex space-x-4 pt-4">
            {/* <a2
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-transparent text-black px-4 py-2 rounded-md transition duration-200 border border-gray-300"
                        >
                            <FaFileAlt className="w-5 h-5" />
                            <span>Resume</span>
                        </a> */}
            <a
              href="mailto:shobhitmehro@umass.edu"
              className="flex items-center space-x-2 hover:text-white transition duration-200"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shobhit-m"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition duration-200"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/shobhitmehro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-green-400 transition duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
          <div className="flex space-x-6"></div>
          <p className="mt-4 text-gray-600">I study computer science at UMass Amherst. </p>
        </section>

        <section className="mt-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Languages and Frameworks
            </h2>
          </div>

          <div className="border border-gray-300 dark:border-gray-700 rounded-md p-4 transition-shadow mt-4">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
              {techIcons.map((item) => (
                <TechIcon key={item.name} name={item.name} src={item.src} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Work Experience
            </h2>
          </div>
          <div className="mt-4">
            <Experience
              title="Krastanov Lab"
              role="Research and Software Development Engineer"
              duration="October 2024 - Current"
              description="quantum pathfinding in julia"
            />
            <div className="pt-4"></div>
            <Experience
              title="National Center for Technology and Dispute Resolution"
              role="Software Engineer"
              duration="February 2024 - Current"
              description="mobile disaster relief app"
            />
            <div className="pt-4"></div>
            <Experience
              title="UMass Theory Group"
              role="Software Engineer"
              duration="June 2024 - August 2024"
              description="complexity theory on linear separability"
            />
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
