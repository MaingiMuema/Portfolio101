import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <section id="about" className="py-10 pt-0 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-[#efb307]">About Me</h2>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">Professional Summary</h3>
          <p className="mb-6 md:mb-8 text-gray-700 leading-relaxed">
            Dedicated Web Developer and UI/UX Engineer with a passion for creating value through design. Experienced in team-based development and conceptualization of company web presence. Specializes in challenging projects requiring comprehensive coding skills, search engine optimization, and security. Develops effective, beautiful, custom-made digital products and services leveraging visual arts understanding.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">Key Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-8">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Frontend Development</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Bootstrap v5</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Backend Development</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Python</li>
                <li>C</li>
                <li>MySQL</li>
                <li>Postgresql</li>
                <li>Supabase</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Other Skills</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>UX/UI Design</li>
                <li>Search Engine Optimization</li>
                <li>Agile Workflow (Slack)</li>
                <li>WordPress / Elementor</li>
                <li>Webflow</li>
                <li>Research</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">Work Experience</h3>
          <div className="space-y-4 md:space-y-6">
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800">Full-time Developer | VectorAfriqProperties</h4>
              <p className="italic text-gray-600 mb-4">December 2023 - Present</p>
              <p className="text-gray-700">Developing and maintaining multiple property websites including:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><a href="https://www.propertyfinder.ke" className="text-blue-600 hover:underline">propertyfinder.ke</a></li>
                <li><a href="https://www.vectorafriqproperties.co.ke" className="text-blue-600 hover:underline">vectorafriqproperties.co.ke</a></li>
                <li><a href="https://www.propertyfinder.ug" className="text-blue-600 hover:underline">propertyfinder.ug</a></li>
              </ul>
            </div>

            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800">Founder & Developer | Aminiblock</h4>
              <p className="italic text-gray-600 mb-4">November 2023 - Present</p>
              <p className="text-gray-700">Started and currently running my own company, focusing on trustless credential management leveraging blockchain (<a href="https://www.aminiblock.com" className="text-blue-600 hover:underline">aminiblock.com</a>).</p>
            </div>
            
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800">UX/UI Designer & Developer | Brandlogs</h4>
              <p className="italic text-gray-600 mb-4">September 2023 - November 2023</p>
              <p className="text-gray-700">Worked on design and development projects, combining UX/UI expertise with web development skills.</p>
            </div>
            
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800">Developer | Bountiful Safaris</h4>
              <p className="italic text-gray-600 mb-4">May 2023 - September 2023</p>
              <p className="text-gray-700">Worked on the Bountiful Safaris CRM, developing and maintaining the customer relationship management system.</p>
            </div>
            
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-medium text-gray-800">UI/UX Engineer & Web Developer | Sanlam Insurance</h4>
              <p className="italic text-gray-600 mb-4">September 2022 - March 2023</p>
              {/* Work experience details */}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">Education</h3>
          <ul className="list-disc list-inside mb-6 md:mb-8 text-gray-700">
            <li>Associate of Science: Computer Science (In progress) | Kabarak University</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Web Development</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML (December 2020)</li>
                <li>CSS (March 2021)</li>
                <li>PHP (February 2021)</li>
                <li>Responsive Web Design (June 2021)</li>
                <li>Javascript (April 2022)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">Programming & Databases</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>SQL (March 2021)</li>
                <li>Python (October 2021)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">Interests</h3>
          <p className="text-gray-700">Art and illustration, Reading articles, Chess, Writing, Programming</p>
        </div>
      </div>
    </section>
  );
};

export default About;
