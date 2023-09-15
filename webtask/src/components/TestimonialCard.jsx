import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div>
        <div className="testimonial-card w-[250px] flex flex-col justify-center items-center ">
            <img src={props.avatar} alt="Avatar" />
            <h1>{props.name}</h1>
            <hr className="border-t border-grey my-4 w-20" />
            <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
    </div>
  )
}

export default TestimonialCard