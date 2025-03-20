import ScrollReveal from '../components/ScrollReveal';
import { motion } from "framer-motion";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clients from '../sections/ClientsReview';
import Contact from '../sections/Contact';
import VideoIntro from '../sections/VideoIntro';
import skillsData from '../db/db';
// import Skills from '../Sections/Skills';

const Home = () => (
  <div className="space-y-12">
    {/* Video Section */}
    <VideoIntro/>

    {/* Skills Section */}
    <section id="skills" className="min-h-screen bg-base-100 py-16">
      <ScrollReveal>
        <div className="container mx-auto p-8">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillsData.map((section, idx) => (
              <div
                key={idx}
                className="p-6 shadow-lg bg-base-200 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <i className={`${section.icon} text-4xl mr-3`}></i>
                  {section.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {section.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="badge badge-outline transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* About Section */}
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 text-gray-200">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/me.jpg"
            alt="Ashraful"
            className="rounded-2xl shadow-lg w-full max-w-sm hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-8 text-center md:text-left">About Me</h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm <span className="text-blue-400 font-semibold">Ashraful</span>, a self-taught 
            <span className="text-green-400 font-semibold"> full-stack developer</span> with a passion for technology. 
            Although I hold a <span className="text-yellow-400 font-semibold">BSc in Botany</span>, my fascination with tech 
            inspired me to dive into web development and pursue it as a career.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I enjoy <span className="text-green-300 font-semibold">building dynamic websites</span> and exploring new technologies. 
            Whether it’s <span className="text-purple-300 font-semibold">UI/UX design</span> or backend systems, 
            I love transforming ideas into reality.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I believe in <span className="text-red-400 font-semibold">learning through mistakes</span>. 
            Every challenge makes me better, and I embrace that growth.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I’m also fascinated by <span className="text-cyan-300 font-semibold">Web3</span> and its potential to reshape the internet. 
            If you're curious, I’d be happy to share what I’ve learned!
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Beyond tech, I’m a <span className="text-teal-300 font-semibold">book lover</span> who enjoys expanding my knowledge.
          </p>

          <blockquote className="italic text-xl font-semibold text-gray-300 border-l-4 border-blue-400 pl-4 mb-6">
            “If you have the courage to dream your dream life, you can achieve it.” — Ashraful
          </blockquote>

          <p className="text-lg mt-8 font-medium text-gray-400 text-center md:text-left">
            🚀 Let's Connect & build something great!
          </p>
        </motion.div>
      </div>
    </section>

    {/* Clients Section */}
    <Clients/>

    {/* Contact Section */}
    <Contact/>
  </div>
);

export default Home;
