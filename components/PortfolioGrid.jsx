"use client";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

// Define the projects array
const featuredProjects = [
  {
    name: "Forecast254",
    image: "/forecast254.png",
    url: "https://forecast254.vercel.app/",
  },
  {
    name: "PropertyFinder",
    image: "/Propertyfinder.png",
    url: "https://www.propertyfinder.ke",
  },
  { name: "Credwave", image: "/Credwave.png", url: "https://www.credwave.com" },
  {
    name: "VectorAfriq",
    image: "/VectorAfriq.png",
    url: "https://vectorafriqproperties.co.ke",
  },
  {
    name: "Brandlogs",
    image: "/Brandlogs.png",
    url: "https://www.brandlogs.com",
  },
  { name: "SCFF", image: "/SCFF.png", url: "https://www.scff.llc" },
];

export default function PortfolioGrid() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const cardVariants = {
    introCard: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    imageCard: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    },
    contactCard: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    skillsCard: {
      hidden: { opacity: 0, rotateX: 90 },
      visible: { opacity: 1, rotateX: 0, transition: { duration: 0.6 } },
    },
    projectsSidebar: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-10 pt-2 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
        {/* Introduction Card */}
        <motion.div
          variants={cardVariants.introCard}
          initial="hidden"
          animate="visible"
          className="col-span-2 p-8 bg-gradient-to-r from-[#efb307] to-[#707070] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl overflow-hidden relative pt-20 justify-center h-full group"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 transition-transform duration-700 ease-in-out group-hover:scale-150"></div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Mark Maingi</span>
          </h2>
          <h3 className="text-3xl font-semibold mb-6">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Tech Innovator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h3>
          <p className="text-xl leading-relaxed mb-6 max-w-2xl text-gray-800">
            Specializing in native applications development, I create
            interactive and engaging digital experiences. From concept to
            deployment, I bring ideas to life through clean, efficient code and
            intuitive design.
          </p>
          <button
            onClick={() => setShowContactPopup(true)}
            className="mt-6 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 flex items-center group"
          >
            <span className="mr-2 text-sm uppercase tracking-wider">
              Let&apos;s build something amazing
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>

        {/* Image Card */}
        <motion.div
          variants={cardVariants.imageCard}
          initial="hidden"
          animate="visible"
          className="p-1 bg-gradient-to-bl from-[#efb307] to-[#707070] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
        >
          <Image
            src="/Mark.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
          />
        </motion.div>

        {/* Contact Me Card */}
        <motion.div
          variants={cardVariants.contactCard}
          initial="hidden"
          animate="visible"
          className="col-span-2 lg:col-span-1 p-8 bg-gradient-to-l from-[#efb307] to-[#707070] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-xl mb-6 text-gray-800">
            Have some questions? Let&apos;s get in touch!
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/MaingiMuema"
              className="text-4xl text-gray-900 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://ke.linkedin.com/in/muema-mark-maingi-3790a020b"
              className="text-4xl text-gray-900 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:manlikemaingi@gmail.com"
              className="text-4xl text-gray-900 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          variants={cardVariants.skillsCard}
          initial="hidden"
          animate="visible"
          className="col-span-2 lg:col-span-2 p-8 bg-gradient-to-r from-[#707070] to-[#efb307] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-medium mb-2">Frontend</h4>
              <ul className="list-disc list-inside text-gray-800">
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>ReactNative</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap v5</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Backend</h4>
              <ul className="list-disc list-inside text-gray-800">
                <li>Node.js</li>
                <li>Express</li>
                <li>Supabase</li>
                <li>PHP</li>
                <li>C</li>
                <li>Wordpress</li>
                <li>CPANEL</li>
                <li>Laravel</li>
                <li>Postgresql</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Sidebar */}
      <motion.div
        variants={cardVariants.projectsSidebar}
        initial="hidden"
        animate="visible"
        className="lg:w-5/12 p-8 bg-gradient-to-br from-[#efb307] via-[#707070] to-[#efb307] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
        <h3 className="text-3xl font-bold mb-8 relative z-10">
          Featured Projects
        </h3>
        <ul className="space-y-6 relative z-10">
          {featuredProjects
            .slice(0, showAllProjects ? featuredProjects.length : 4)
            .map((project, index) => (
              <li key={index} className="group">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl transition-all duration-300 hover:bg-white hover:bg-opacity-20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                      {project.name}
                    </span>
                    <svg
                      className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden h-0 group-hover:h-32 transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-lg shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </a>
              </li>
            ))}
        </ul>
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="mt-10 w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center group"
        >
          <span className="mr-2 text-sm uppercase tracking-wider">
            {showAllProjects ? "Show Less" : "View All Projects"}
          </span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </motion.div>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-6 text-center">
              How would you like to contact me?
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://wa.me/254112246573" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <FaWhatsapp className="mr-3 text-xl" />
                Contact via WhatsApp
              </a>
              <a
                href="tel:+254112246573" // Replace with your phone number
                className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <FaPhone className="mr-3 text-xl" />
                Call Me
              </a>
            </div>
            <button
              onClick={() => setShowContactPopup(false)}
              className="mt-6 w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
