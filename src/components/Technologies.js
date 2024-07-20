import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion} from "framer-motion"
import matlab from "./projectphotos/matlab-1-32.png"

const iconVariants = (duration) => ({
    initial : {y:-10},
    animate: {
        y: [10,-10],
        transition:{
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{y:0, opacity: 1, transition: {duration:0.5, delay:0.5}}}
        initial={{y: -100, opacity: 0}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        initial = {{x: -100, opacity: 0}}
        whileInView = {{x: 0, opacity: 1, transition: {duration: 0.5, delay: 0.5},}}
        className='flex flex-wrap justify-center items-center'>
            <motion.div
            variants={iconVariants(2.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <FaReact className='text-7xl text-cyan-600' />
            </motion.div>
            
            <motion.div 
            variants={iconVariants(3)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <IoLogoNodejs className='text-7xl text-green-600' />
            </motion.div>

            <motion.div 
            variants={iconVariants(3.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <IoLogoFirebase className='text-7xl text-orange-600' />
            </motion.div>
            
            <motion.div 
            variants={iconVariants(4)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <SiMongodb className='text-7xl text-green-600' />
            </motion.div>

            <motion.div 
            variants={iconVariants(4.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <RiTailwindCssFill className='text-7xl text-blue-700' />
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <FaPython className='text-7xl text-yellow-400' />
            </motion.div>

            <motion.div 
            variants={iconVariants(5.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <IoLogoJavascript className='text-7xl text-yellow-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(5.5)}
            initial = "initial"
            animate = "animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 m-2'>
                <img src={matlab} alt='matlab icon' height={72} width={72} className='text-7xl text-yellow-400' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
