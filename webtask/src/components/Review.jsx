import React from 'react'
import avatar from './assets/avatar.png';
const Review = () => {
    return (
        <div className='mt-[5rem]'>
            <div className="left-review">
                <div className="review-card flex">
                    <div className="avatar"><img src={avatar} alt="Avatar" /></div>
                    <div className="avatar-text">
                        <p>Jenny Wilson</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tenetur?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review