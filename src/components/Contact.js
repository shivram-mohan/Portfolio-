import React from 'react';
import { CONTACT } from "./constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.h2 
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
        initial={{ y: -100, opacity: 0 }}
        className='my-10 text-center text-4xl'
      >
        Get in Touch!
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.a 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
          href={`mailto:${CONTACT.email}`} 
          className='block my-4'
        >
          {CONTACT.email}
        </motion.a>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.5 } }}
          className='my-4'
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 2 } }}
          href={CONTACT.resume}
          className='block my-4 text-violet-600 underline'
          download
        >
          Download My Resume
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
