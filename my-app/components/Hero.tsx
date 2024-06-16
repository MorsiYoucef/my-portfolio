import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { FaLocationArrow } from 'react-icons/fa'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className=" pb-20 pt-36 font-sans" id="home">
      <video
        autoPlay
        muted
        loop
        className=" rotate-180 absolute top-[-500px] h-[900px] w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div>
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>
      <div className="h-screen w-full dark:bg-[#040014] bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className=" flex flex-col justify-center items-center relative my-20 z-10 ">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className=" uppercase tracking-widest text-xs lg:text-xl text-center text-blue-100 max-w-full">
            Dynamic Web Magic With New Technologies
          </h2>
          <TextGenerateEffect
            className=" font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
            words=" Transforming Concept into Seamless User Experiences"
          />
        </div>
        <p className=" text-center lg:text-2xl">
          Hi, I&apos;am{' '}
          <span className=" text-purple font-bold">MORSI YOUCEF</span> a
          software engineer Based in Algiers
        </p>
        <a className=" pt-10" href="#about">
          <MagicButton
            title=" Show My Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  )
}

export default Hero
