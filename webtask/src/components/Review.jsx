import React from 'react';
import avatar from './assets/avatar.png';

const Review = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-[10rem]'>
            <div className="left-review relative flex flex-col justify-center items-center">
                <svg className='absolute right-0 top-0'
                 xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                    <path d="M0 46.5C0 40.3935 1.20276 34.3469 3.5396 28.7052C5.87645 23.0636 9.30161 17.9375 13.6195 13.6195C17.9375 9.30161 23.0636 5.87644 28.7052 3.5396C34.3469 1.20276 40.3935 -2.66922e-07 46.5 0L46.5 13.95C42.2255 13.95 37.9928 14.7919 34.0437 16.4277C30.0945 18.0635 26.5062 20.4611 23.4837 23.4837C20.4611 26.5062 18.0635 30.0945 16.4277 34.0437C14.7919 37.9928 13.95 42.2255 13.95 46.5H0Z" fill="#BE554B" />
                </svg>
                <div className="review-card flex w-[60%] rounded shadow-lg my-[50px]">
                    <div className="avatar"><img src={avatar} alt="Avatar" /></div>
                    <div className="avatar-text">
                        <p>Jenny Wilson</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tenetur?</p>
                    </div>
                </div>
                <div className="review-card flex w-[60%] rounded shadow-lg my-[50px]">
                    <div className="avatar"><img src={avatar} alt="Avatar" /></div>
                    <div className="avatar-text">
                        <p>Jenny Wilson</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tenetur?</p>
                    </div>
                </div>
                <div className="review-card flex w-[60%] rounded shadow-lg my-[50px]">
                    <div className="avatar"><img src={avatar} alt="Avatar" /></div>
                    <div className="avatar-text">
                        <p>Jenny Wilson</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tenetur?</p>
                    </div>
                </div>
            </div>
            <div className="right-review flex relative flex-col justify-center md:ml-[100px] sm:ml-[200px]">
                <svg className='absolute w-[100px] top-[-4rem] right-[4rem]'
                    xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z" fill="#87CC81" fill-opacity="0.2" />
                </svg>
                <h1 className='text-5xl font-semibold'>Tropical Adventure</h1>
                <h2 className='text-4xl my-2'>for Students.</h2>
                <p className='text-xl my-1'>Student Tropical Vacation: Relax and Recharge</p>
                <ul className='list-disc ml-10'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <button className='bg-button text-white rounded-full w-[200px] py-2 mt-10'>Explore More</button>
            </div>
        </div>
    );
}

export default Review;
