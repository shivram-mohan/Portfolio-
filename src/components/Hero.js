import React from 'react'
import { HERO_CONTENT } from './constants'
import profilePic  from "../WhatsApp Image 2024-07-11 at 00.43.55_557c50db.jpg"
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 ml-20'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
               <div
               className='flex flex-col items-center lg:items-start'>
                 <motion.h1 
                 initial = {{x: -100, opacity: 0}}
                 animate = {{x: 0, opacity: 1, transition: {duration: 1, delay: 0.5},}}
                 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16'>
                    Shivram Mohan
                 </motion.h1>
                  <motion.span
                  initial = {{x: -100, opacity: 0}}
                  animate = {{x: 0, opacity: 1, transition: {duration: 1, delay: 1},}}
                  className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent'> Full Stack Developer</motion.span>
                  <motion.p
                  initial = {{x: -100, opacity: 0}}
                  animate = {{x: 0, opacity: 1, transition: {duration: 1, delay: 1.5},}}
                  className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>  
                    
               </div>

            </div>
            <motion.div 
            
            className="w-full lg:w-1/2 lg:p-8">
               <motion.div
               initial = {{x:100, opacity: 0}}
               animate = {{x: 0, opacity: 1, transition: {duration: 1, delay:1.2}}}
               className='flex justify-center'>
                    <img src={profilePic} alt="profilePic" width={350} className=' rounded-lg' />
               </motion.div>

            </motion.div>
             
        </div>
      
    </div>
  )
}

export default Hero
