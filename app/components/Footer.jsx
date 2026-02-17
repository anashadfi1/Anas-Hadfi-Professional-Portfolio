import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div >
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>
            anashadfi1@gmail.com
        </div>
        <div className='text-center sm:flex items-center justify-between border-t
                        border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy;Anas Hadfi. All rights reserverd</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/anashadfi1">Github</a></li>
            <li><a href="https://www.linkedin.com/in/anas-hadfi/">Linkedin</a></li>
            <li><a href="https://www.hackerrank.com/profile/anashadfi1">Hackerrank</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer