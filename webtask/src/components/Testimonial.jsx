import React from 'react'
import avatar from './assets/Ellipse.png';
import avatarTwo from './assets/EllipseTwo.png';
import avatarThree from './assets/EllipseThree.png';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    return (
        <div className='mb-[200px]' >
            <h1 className='text-4xl font-semibold text-center my-[5rem]'>Testimonial</h1>
            <div className="Testimonials w-[100vw] flex justify-evenly">
                <TestimonialCard avatar={avatar} name={"Corey Korsgaard"} />
                <TestimonialCard avatar={avatarTwo} name={"Jakob Aminoff"}/>
                <TestimonialCard avatar={avatarThree} name={"Carla Press"}/>
            </div>
        </div>
    )
}

export default Testimonial