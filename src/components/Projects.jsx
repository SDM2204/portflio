import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import './Projects.css'; // Import the CSS file

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className='relative border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      <div className='relative'>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='project-item mb-8 flex flex-wrap lg:justify-center'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='relative w-full lg:w-1/4'
            >
              <motion.img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='project-image mb-6 rounded'
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              {hoveredProject === index && (
                <motion.div
                  className='floating-window'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={PROJECTS[hoveredProject].image}
                    alt={project.title}
                    className='w-full h-full object-cover rounded'
                  />
                  <h6 className='mt-2 font-semibold text-white'>{PROJECTS[hoveredProject].title}</h6>
                  <p className='text-natural-400'>{PROJECTS[hoveredProject].description}</p>
                </motion.div>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4 project-details'
            >
              <h6 className='mb-2 font-semibold'>{project.title}</h6>
              <p className='mb-4 text-natural-400'>{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
