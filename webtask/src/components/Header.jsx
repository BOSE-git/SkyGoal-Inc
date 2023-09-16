import React, {useState} from 'react';
import './Header.css';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    function handleMenu(){
        setMenuActive(!menuActive);
        if(menuActive === true){
            document.querySelector('.navlinks').classList.add("active");
        }
        else if(menuActive === false){
            document.querySelector('.navlinks').classList.remove("active");
        }
    }

  return (
    <div className="bg-white p-4 fixed w-[100vw] top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left-nav flex">
            <ul className='Menu' onClick={handleMenu}>
                <li className="text-black font-semibold ">Menu</li>
            </ul>
          <ul className="navlinks flex font-semibold z-10 bg-white">
            <li className="text-black px-2">Home</li>
            <li className="text-black px-2">About</li>
            <li className="text-black px-2">Schedules</li>
            <li className="text-black px-2">Membership</li>
            <li className="text-black px-2">Pricing</li>
          </ul>
        </div>
        <div className="right-nav">
          <ul className="flex space-x-4 items-center">
            <li className="text-grey">Offers</li>
            <button className="bg-button text-white rounded-full px-4 py-2">Courses</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
