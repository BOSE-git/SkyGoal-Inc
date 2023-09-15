import girl2 from './assets/girlwithcircle2.png';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Book = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 w-full mt-[10rem]'>
            <div className="left-review relative flex flex-col justify-center items-center">
                <div className="girl2">
                    <img className='w-[80%]' src={girl2} alt="Girl" />
                </div>
            </div>
            <div className="right-review rounded-lg shadow-lg w-[450px] flex relative flex-col px-[50px] py-[50px] lg:ml-[100px] md:ml-[100px] sm:ml-[200px]">
                <div className="booking">
                    <h1 className="text-2xl font-bold mb-4">Book now</h1>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel.</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="city" className="text-xs font-bold  mb-1">City</label>
                            <input
                                id="city"
                                className="bg-[#F3F3F3] py-2 px-3 w-full rounded"
                                type="text"
                                placeholder="Placeholder"
                            />
                        </div>
                        <div className="flex mb-4">
                            <div className="Arrival flex-1 mr-2">
                                <label htmlFor="arrival" className="text-xs font-bold  mb-1">ARRIVAL</label>
                                <input
                                    id="arrival"
                                    className="bg-[#F3F3F3] py-2 px-3 w-full rounded"
                                    type="text"
                                    placeholder="10 October"
                                />
                            </div>
                            <div className="Departure flex-1 ml-2">
                                <label htmlFor="departure" className="text-xs font-bold  mb-1">DEPARTURE</label>
                                <input
                                    id="departure"
                                    className="bg-[#F3F3F3] py-2 px-3 w-full rounded"
                                    type="text"
                                    placeholder="11 October"
                                />
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="star flex-1 mr-2">
                                <label htmlFor="star" className="text-xs font-bold  mb-1">Star</label>
                                <div className="counter flex items-center bg-[#F3F3F3] rounded">
                                    <button className="px-4 py-2" type="button">
                                        <AddIcon />
                                    </button>
                                    <p className="text-sm px-3">0</p>
                                    <button className="px-4 py-2" type="button">
                                        <RemoveIcon />
                                    </button>
                                </div>
                            </div>
                            <div className="room flex-1 ml-2">
                                <label htmlFor="room" className="text-xs font-bold  mb-1">Room</label>
                                <div className="counter flex items-center bg-[#F3F3F3] rounded">
                                    <button className="px-4 py-2" type="button">
                                        <AddIcon />
                                    </button>
                                    <p className="text-sm px-3">0</p>
                                    <button className="px-4 py-2" type="button">
                                        <RemoveIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className="bg-[black] text-white rounded-lg py-2 w-[20%]">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Book;
