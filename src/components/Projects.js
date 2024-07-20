import React from 'react'
import {PROJECTS} from "./constants"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <motion.h2 
        whileInView={{y:0, opacity: 1, transition: {duration:0.5}}}
        initial={{y: -100, opacity: 0}}
        className='text-4xl my-20 text-center'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    initial = {{x: -100, opacity: 0}}
                    whileInView = {{x: 0, opacity: 1}} 
                    transition= {{duration: 0.5 }}
                    className='lg:w-1/4 w-full'>
                    <img src={project.image} alt={project.title} width={250} height={200} className='rounded-lg mb-6'/>
                    </motion.div>
                    <motion.div 
                    initial = {{x:100, opacity: 0}}
                    whileInView = {{x: 0, opacity: 1}} 
                    transition= {{duration: 0.5}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 semibold'>
                            {project.title}

                        </h6>
                        <p className='mb-4 text-slate-300 '>
                            {project.description}
                        </p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className='mr-2 mt-4 rounded-lg bg-gray-900 px-2 py-1 text-sm font-medium text-violet-600'>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Projects
