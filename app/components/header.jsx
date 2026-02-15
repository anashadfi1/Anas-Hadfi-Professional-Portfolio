import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Header = () => {

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
    items-center justify-center gap-4'> 
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-28'/>
           
        </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Anas Hadfi <Image src={assets.hand_icon} alt='' className='w-10'/></h3>
         <h1 className='tezt-3xl sm:text:6xl lg:text-[66px] font-Ovo'>
            Data Analyst based in Morocco
        </h1>
        <p className='max-w-2xl mx-auto font-ovo'>
            I am a data analyst with a passion for transforming raw data into actionable insights. My expertise lies in data visualization, statistical analysis, and machine learning. 
            I thrive on solving complex problems and delivering data-driven solutions that drive business success.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'> contact me <Image src={assets.right_arrow_bold_dark} alt='' className='w-4'/></a>
             <a href="/Anas-Hadfi-resume.pdf" download 
             className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
