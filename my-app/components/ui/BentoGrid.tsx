import { cn } from '@/utils/cn'
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'

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
  return (
    <div
      className={cn(
        'row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
      style={{ background: 'rgb(4,7,29)', backgroundColor: 'gradient...' }}
    >
      <div className={`${id === 6} && ' flex justify-center h-full'`}>
        <div className=" w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
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
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className=" absolute z-50 flex items-center justify-center text-white font-bold h-full w-full "></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
            {description}
          </div>
          <div className=" font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 ">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}
