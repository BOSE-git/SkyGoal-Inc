
import girl2 from './assets/girlwithcircle2.png';
import React from 'react'

const Book = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-[10rem]'>
            <div className="left-review relative flex flex-col justify-center items-center">
                <div className="girl2">
                    <img className='w-[80%]' src={girl2} alt="Girl" />
                </div>
            </div>
            <div className="right-review flex relative flex-col justify-center lg:ml-[200px] md:ml-[100px] sm:ml-[200px]">
                <div className="booking">
                    <h1>Book now</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel.</p>
                </div>
            </div>
        </div>
    )
}

export default Book