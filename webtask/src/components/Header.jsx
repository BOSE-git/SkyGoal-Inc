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
    <div className="bg-white-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left-nav flex">
            <ul className='Menu' onClick={handleMenu}>
                <li className="text-black font-semibold ">Menu</li>
            </ul>
          <ul className="navlinks flex font-semibold">
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
            <button className="bg-button text-white rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white">Courses</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
