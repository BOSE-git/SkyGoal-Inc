import React from 'react'

const ReviewCard = (props) => {
    return (
        <div className="review-card flex justify-center items-center w-[50%] rounded-lg shadow-lg my-[50px] md:my-[30px] sm:my-[25px]">
            <div className="avatar mx-4 my-4 w-[120px]"><img className='w-[100%]' src={props.avatar} alt="Avatar" /></div>
            <div className="avatar-text">
                <p className='font-semibold'>Jenny Wilson</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tenetur?</p>
            </div>
        </div>
    )
}

export default ReviewCard