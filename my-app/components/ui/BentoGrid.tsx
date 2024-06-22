'use client'

import { cn } from '@/utils/cn'
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'
import { GridGlob } from './GridGlob'
import { FcCheckmark } from 'react-icons/fc'
import { useState } from 'react'

import MagicButton from './MagicButton'
import { IoCopyOutline } from 'react-icons/io5'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-4 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  imgClassName,
  img,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id?: number
  imgClassName?: string
  img?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('morsiyoucef.pro@gmail.com')

    setCopied(true)
  }

  return (
    <div
      className={cn(
        'row-span-1 font-sans relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-white/[0.1] justify-between flex flex-col space-y-4',
        className
      )}
      style={{ background: 'rgb(4,7,29)', backgroundColor: 'gradient...' }}
    >
      <div className={`${id === 6 && ' flex justify-center'} h-full `}>
        <div className=" absolute top-0 w-full h-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
      </div>
      <div
        className={`absolute right-0 bottom-0 ${
          id === 5 && 'w-full opacity-80'
        }`}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            className={' object-cover object-center w-full h-full'}
          />
        )}
      </div>
      {id === 6 && <BackgroundGradientAnimation />}
      <div
        className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col lg:px-10'
        )}
      >
        <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
          {description}
        </div>
        <div className=" font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 ">
          {title}
        </div>
      </div>
      {id === 2 && <GridGlob />}
      {id === 3 && (
        <div className=" flex gap-2 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
          <div className=" flex flex-col relative bottom-9 gap-5 lg:gap-5 ">
            <span className=" py-5 px-3 rounded-lg text-center bg-[#10132e]" />
            {['React.js', 'Next.js', 'TypeScript'].map((item) => (
              <span
                key={item}
                className=" py-3 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]  "
              >
                {item}
              </span>
            ))}
          </div>
          <div className=" flex flex-col relative bottom-8 gap-5 lg:gap-5 ">
            {['Express.js', 'Three.js', ' WordPress'].map((item) => (
              <span
                key={item}
                className=" py-3 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]  "
              >
                {item}
              </span>
            ))}
            <span className=" py-5 px-3 rounded-lg text-center bg-[#10132e]"></span>
          </div>
        </div>
      )}
      {id === 6 && (
        <div className=" mt-5 relative">
          <div className={`absolute -bottom-5 right-0`}>
            {/* <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData: animationData,
                rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
              }}
            /> */}
          </div>
          <div className=" absolute right-40 bottom-16 lg:bottom-10 lg:right-[25%]">
            <MagicButton
              title={copied ? 'Email copied' : 'Copy my Email'}
              icon={copied ? <FcCheckmark /> : <IoCopyOutline />}
              position="left"
              otherClasses=" bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        </div>
      )}
    </div>
  )
}
