import React from 'react'
import boywithcircle from './assets/boywithcircle.png';
import HomeSvg from './HomeSvg.jsx';

const Home = () => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  mt-[6rem] w-[100vw] justify-center items-center'>
            <div className="left-home w-[100%]  relative lg:mx-[8rem] md:mx-[1rem] sm:mx-[2rem] md:ml-2 sm:ml-2">
                <HomeSvg />
                <h2 className='font-semibold pt-20'>Discover the beauty of tropics</h2>
                <h1 className='text-7xl font-bold' >Tropical Destinations</h1>
                <h1 className='text-7xl font-semibold'>For Students</h1>
                <div className="descr relative">
                    <p className='my-[2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate cum similique ipsam eius laboriosam consequuntur dignissimos assumenda sit?</p>
                    <svg className='absolute right-0'
                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.83352 10.3335C8.76652 10.3335 10.3335 8.76652 10.3335 6.83352C10.3335 4.90053 8.76652 3.33352 6.83352 3.33352C4.90053 3.33352 3.33352 4.90053 3.33352 6.83352C3.33352 8.76652 4.90053 10.3335 6.83352 10.3335Z" fill="#505C59" />
                    </svg>
                </div>
                <button className='bg-button text-white rounded-full px-8 py-2'>SIGN UP</button>
            </div>
            <div className="right-home flex items-center justify-center relative">
                <img className='w-[50%]' src={boywithcircle} alt="Boy" />
                <svg className='absolute bottom-[-10%] right-[20%]'
                xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <path fill-rule="evenodd" clipRule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM16.5957 25.0957C21.2901 25.0957 25.0957 21.2901 25.0957 16.5957C25.0957 11.9013 21.2901 8.0957 16.5957 8.0957C11.9013 8.0957 8.0957 11.9013 8.0957 16.5957C8.0957 21.2901 11.9013 25.0957 16.5957 25.0957Z" fill="#87CC81" />
                </svg>
            </div>
        </div>
    )
}

export default Home