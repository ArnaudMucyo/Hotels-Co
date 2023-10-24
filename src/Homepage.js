import React from "react";
import hotelRoom from "../src/assets/images/hotel room.jpg"

function Homepage(){

    return(
      <div className="font-noto px-10 py-5 bg-primaryGrey">

          <div className="my-3">
              <ul className="flex justify-between cursor-pointer">
                  <li className=" font-bold w-40 hover:font-bold text-secondaryBlue font-menu duration-100 ease-in">Standard rooms</li>
                  <li className="w-40 hover:font-bold text-secondaryBlue font-menu duration-100 ease-in">Deluxe rooms</li>
                  <li className="w-40 hover:font-bold text-secondaryBlue font-menu duration-100 ease-in">Executive Suite</li>
                  <li className="w-40 hover:font-bold text-secondaryBlue font-menu duration-100 ease-in">Presidential Suite</li>
              </ul>
          </div>
          <div className="w-cardWidth h-cardHeight rounded mt-6 ">
              <img className="w-full rounded-cardRadius" src={hotelRoom} alt="Hotel-room-image"/>
              <h1 className="mt-2 font-bold text-secondaryBlue">Standard rooms</h1>
              <p><span className="font-bold">$123</span> per night</p>
          </div>
      </div>
    );
}

export default Homepage