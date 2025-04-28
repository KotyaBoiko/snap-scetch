import { FC } from 'react';

type Props = {
  setIsActive: (state: boolean) => void;
  isActive: boolean;
}

const Pause:FC<Props> = ({setIsActive, isActive}) => {
  return (
    isActive ? (
      <div className='flex gap-1 cursor-pointer hover:opacity-70 transition-opacity' onClick={() => setIsActive(false)}>
        <div className='h-7 w-2 bg-main-beige'></div>
        <div className='h-7 w-2 bg-main-beige'></div>
      </div>
    ) : (
      <div className="border-t-15 border-t-transparent border-r-0 border-l-20 border-l-main-beige border-b-15 border-b-transparent cursor-pointer hover:opacity-70 transition-opacity" onClick={() => setIsActive(true)}></div>
    )
  )
}

export default Pause