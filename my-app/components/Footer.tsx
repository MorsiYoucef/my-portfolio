import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className=" w-full pt-20 pb-10" id="contact">
      <div className=" w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className=" w-full h-full opacity-50"
        />
      </div>
      <div className=" flex flex-col items-center">
        <h1 className=" heading lg:w-[850px]">
          Ready to take <span className=" text-purple">Your</span> digital
          presence to the next level?
        </h1>
        <p className=" text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:morsiyoucef.pro@gmail.com">
          <MagicButton
            title="Let's get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className=" flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light  ">
          Copyright © 2024 Yusuf
        </p>
        <div className=" flex gap-2 items-center md:gap-3 ">
          {socialMedia.map((profile) => (
            <a href={profile.link} key={profile.id} className=" cursor-pointer">
              <img
                src={profile.img}
                alt={profile.img}
                className=" cursor-pointer"
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
