import React from 'react'
import img1 from './assets/card-image1.png';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const DestinationCard = () => {
    return (
        <div className="destination-card rounded shadow-lg mx-5 h-[320px] w-[250px]">
            <img className='w-[100%]' src={img1} alt="University 1" />
            <div className="title text-xl font-semibold my-2 mx-1">Harvard University</div>
            <div className="flex justify-between items-center mx-2">
                <div className="location my-2  text-sm">Cambridge, Massachusetts, UK</div>
                <MoreHorizIcon />
            </div>
        </div>
    )
}

export default DestinationCard