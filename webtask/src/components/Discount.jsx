import React from 'react';
import girl from './assets/girlwithcircle.png';

const Discount = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-[10rem]'>
            <div className="left-discount flex relative flex-col justify-center lg:ml-[200px] md:ml-[100px] sm:ml-[200px]">
                <svg className='absolute top-[-10px] -z-10'
                    xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path d="M8.61466e-06 38C9.48718e-06 33.0098 0.982913 28.0684 2.89259 23.458C4.80227 18.8476 7.60133 14.6586 11.13 11.1299C14.6586 7.60131 18.8477 4.80225 23.458 2.89257C28.0684 0.98289 33.0098 -7.73478e-06 38 -6.64413e-06L38 13.4895C34.7812 13.4895 31.594 14.1235 28.6202 15.3552C25.6465 16.587 22.9445 18.3924 20.6685 20.6684C18.3924 22.9445 16.587 25.6465 15.3552 28.6202C14.1235 31.594 13.4895 34.7812 13.4895 38L8.61466e-06 38Z" fill="#BE554B" />
                </svg>
                <svg className='absolute top-[-60px] right-[80px]'
                    xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z" fill="#F8E27E" fill-opacity="0.25" />
                </svg>
                <p className='text-xl my-1 font-semibold'>Get 20% off for student</p>
                <h1 className='text-5xl font-semibold'>Student discounts available.</h1>
                <h2 className='text-2xl my-2'>Get ready for some fun in the sun!</h2>
                <ul className='list-disc ml-10'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <button className='bg-button text-white rounded-full w-[200px] py-2 mt-10'>Explore More</button>
            </div>
            <div className="right-discount relative flex flex-col justify-center items-center">
                <div className="girlimage relative">
                    <img className='w-[80%]' src={girl} alt="Girl" />
                    <div className="shape w-[210px] h-[66px] bg-[#BE554B] rounded-full absolute top-[40px] right-[170px] -z-10" style={{ transform: 'rotate(-21.962deg)' }}></div>
                    <div className="shape w-[210px] h-[66px] bg-[#505C59] rounded-full absolute top-[210px] right-[250px] -z-10" style={{ transform: 'rotate(-21.962deg)' }}></div>
                    <svg className='absolute bottom-[-20px] right-[80px] -z-10'
                        xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 59 59" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z" fill="#F8E27E" fill-opacity="0.25" />
                    </svg>
                </div>
            </div>

        </div>
    );
}

export default Discount;
