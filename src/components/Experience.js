import React from 'react'
import { EXPERIENCES } from './constants'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className='border-b pb-2 border-neutral-900'>
        <motion.h2 
        whileInView={{y:0, opacity: 1, transition: {duration:0.5}}}
        initial={{y: -100, opacity: 0}}
        className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                    initial = {{x: -100, opacity: 0}}
                    whileInView = {{x: 0, opacity: 1}} 
                    transition= {{duration: 0.5 }}
                    className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-white'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    initial = {{x:100, opacity: 0}}
                    whileInView = {{x: 0, opacity: 1}} 
                    transition= {{duration: 0.5}}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'> 
                            {experience.role} -{" "}
                            <span className='text-sm text-violet-600'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-slate-500 '> {experience.description}</p>
                        {experience.technologies.map((tech,index)=> (
                            <span key={index} className='mr-2 mt-4 rounded-md bg-gray-900 px-2 py-1 text-sm font-medium text-violet-600'>
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

export default Experience
