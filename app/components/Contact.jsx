'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'
const Contact = () => {
  return (
    <motion.div 
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
                    bg-no-repeat bg-center bg-[length:90%_auto]'
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1}}
        >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
                    initial={{y:20, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.5, delay:0.3}}>Connect With Me</motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
                    initial={{y:20, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.5, delay:0.5}}
        >Get in touch</motion.h2>
        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{delay:0.7,duration:0.5}}>
        I would love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </motion.p>
        <motion.form className='max-w-2xl mx-auto'
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{delay:0.9,duration:0.5}}>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
              <div className='flex'>
                <motion.input type="text" 
                required
                className='flex-1 p-3 outline-none border-[0.5px] 
                            border-gray-400 rounded-md bg-white mr-2'
                placeholder='Enter your name'
                initial={{y:20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.6, delay:1.1}}/>
                <motion.input type="email" placeholder='Enter your e-mail' 
                required
                className='flex-1 p-3 outline-none border-[0.5px] 
                            border-gray-400 rounded-md bg-white ml-2'
                initial={{y:20, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.6, delay:1.2}}/>
              </div>
            </div>
            <motion.textarea rows="6"  
            placeholder='Enter your messaage' 
            required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400
                        rounded-md bg-white md-6'
            initial={{y:20, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:1.3}}
            ></motion.textarea>
            <motion.button type='submit' 
                            className='py-3 px-8 w-max flex items-center justify-between 
                                gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 mt-[10px]'
                         
                          whileHover={{scale:1.05}}
                          transition={{duration:0.3}}
                          >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
        </motion.form>
    </motion.div>
  )
}

export default Contact