import React from 'react'
import aboutPic from './projectphotos/coder.jpg'
import {ABOUT_TEXT} from './constants'
import {motion } from "framer-motion"
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
            About <span className='text-slate-600'>Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <motion.div
                initial = {{x: -100, opacity: 0}}
                whileInView = {{x: 0, opacity: 1, transition: {duration: 0.5, delay: 0.5},}}
                className='flex items-center justify-center'>
                    <img src={aboutPic} alt='About pic' height={300} width={300} className='rounded-xl'/>
                </motion.div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.div
                initial = {{x:100, opacity: 0}}
                whileInView = {{x: 0, opacity: 1, transition: {duration: 0.5, delay:0.5}}}
                className='flex items-center justify-center py-8'>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default About
