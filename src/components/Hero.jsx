import React from 'react';
import { styles } from '../style'
const Hero = () => {
  return (
    <section className='h-screen w-full relative mx-auto'>
      <div
        className={` relative top-[8rem] max-w-7xl mx-auto ${styles.paddingX} flex items-start gap-5`}
        // className={` absolute  inset-0 top-[8rem] max-w-7xl mx-auto ${styles.paddingX} flex items-start gap-5`} // unable to understand how inset is working
      >
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>

        <div>
          <h1 className={` ${styles.heroHeadText} text-white`}>
            Hi! I'm <span className='text-[#915EFF] '>Suraj Shukla</span>
          </h1>
          <p className={` ${styles.heroSubText}`}>A College Student, YouTuber  <br />& A Full Stack Developer</p>
        </div>
      </div>
    </section>
  )
}

export default Hero