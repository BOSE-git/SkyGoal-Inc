import React from 'react';

const Header = () => {
  return (
    <div className="bg-white-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left-nav">
          <ul className="flex space-x-4 pl-10 font-semibold sm:pl-4">
            <li className="text-black sm:hidden">Menu</li>
            <li className="text-black hidden sm:block">Home</li>
            <li className="text-black hidden sm:block">About</li>
            <li className="text-black hidden sm:block">Schedules</li>
            <li className="text-black hidden sm:block">Membership</li>
            <li className="text-black hidden sm:block">Pricing</li>
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
