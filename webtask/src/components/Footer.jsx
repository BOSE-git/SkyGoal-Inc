import React from 'react';

const Footer = () => {
  return (
    <div className='mt-5 mb-1'>
      <ul className='flex flex-wrap justify-center sm:justify-evenly items-center'>
        <li className='my-2 sm:my-0'>
          <a href='#' className='text-gray-500 hover:text-gray-700'>Privacy Policy</a>
        </li>
        <li className='my-2 sm:my-0'>
          <a href='#' className='text-gray-500 hover:text-gray-700'>Terms of Use</a>
        </li>
        <li className='my-2 sm:my-0'>
          <a href='#' className='text-gray-500 hover:text-gray-700'>Sales and Refunds</a>
        </li>
        <li className='my-2 sm:my-0'>
          <a href='#' className='text-gray-500 hover:text-gray-700'>Legal</a>
        </li>
        <li className='my-2 sm:my-0 font-semibold'>
          <a href='#' className='text-black hover:text-gray-700'>About</a>
        </li>
        <li className='my-2 sm:my-0 font-semibold'>
          <a href='#' className='text-black hover:text-gray-700'>Schedules</a>
        </li>
        <li className='my-2 sm:my-0 font-semibold'>
          <a href='#' className='text-black hover:text-gray-700'>Pricing</a>
        </li>
        <li className='my-2 sm:my-0 font-semibold'>
          <a href='#' className='text-black hover:text-gray-700'>Membership</a>
        </li>
        <li className='my-2 sm:my-0 font-semibold'>
          <a href='#' className='text-black hover:text-gray-700'>Joins</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
