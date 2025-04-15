import React from 'react'

import img from '@/app/assets/images/europeana-84R6ipsqaxo-unsplash.jpg'

const ForWhom = () => {
  return (
    <div className='h-[100vh] py-5'>
      <div className="wrapper">
        <div className='bg-main-red h-full w-full text-main-beige p-10 relative overflow-hidden'>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-7xl'>For artists of all levels</h2>
            <p className='w-xl text-center'>Whether you’re just starting or refining years of experience — SnapScetch helps you stay consistent, build confidence, and improve your visual thinking through simple daily practice.</p>
          </div>
          <img src={img} alt="art" className='absolute bottom-[-70%] w-[80%] rounded-4xl h-auto left-[50%] translate-x-[-50%]'/>
        </div>
      </div>
    </div>
  )
}

export default ForWhom