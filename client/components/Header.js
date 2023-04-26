/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

import Link from 'next/link'

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = [
    {
      image: 'https://source.unsplash.com/1600x900/?farmers',
      title: 'Empower Farmers',
      description:
        'Grow your wealth while empowering farmers - Invest with us today!!',
    },
    {
      image: 'https://source.unsplash.com/1600x900/?domestic-farm-animals',
      title: 'Livestock Investment',
      description:
        'Maximize your investment potential with our Livestock investment opportunities',
    },
    {
      image: 'https://source.unsplash.com/1600x900/?farm',
      title: 'Crop Farming',
      description:
        'Help us create a more inclusive financial system with our blockchain-powered microlending platform for underserved communities!',
    },
  ]

  //   ========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, items.length])
  //   ========================================================

  return (
    <div className='relative'>
      <img
        className='absolute inset-0 object-cover w-full h-full'
        src={items[currentIndex].image}
        alt={items[currentIndex].title}
      />
      <div className='relative bg-gray-900 bg-opacity-75'>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between md:flex-row text-center sm:text-start'>
            <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
                {items[currentIndex].title}
              </h2>
              <p className='max-w-xl mb-4 text-base text-gray-400 md:text-lg '>
                {items[currentIndex].description}
              </p>
              <Link
                href='#investment'
                aria-label=''
                className='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700'
              >
                Learn more
              </Link>
            </div>
            <div className='w-full max-w-xl xl:px-2 xl:w-5/12'>
              <div className='bg-white rounded shadow-2xl p-2 sm:p-2'>
                <img
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
