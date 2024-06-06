import { cn } from '@/utils/cn'

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
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  )
}
