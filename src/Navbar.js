import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faUserCircle} from "@fortawesome/free-solid-svg-icons";


function Navbar(){
    return(

        <nav className="bg-primaryBlue p-4 font-noto">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-logo text-title font-bold text-2xl">Hotels & Co</div>
                {/*<div>*/}
                {/*    <input*/}
                {/*    type="text"*/}
                {/*    placeholder="Find your hotel"*/}
                {/*    className="border rounded p-2 w-400 focus:outline-none"*/}

                {/*    />*/}
                {/*    <button className="bg-secondaryBlue text-white p-2 rounded-r">*/}
                {/*        <FontAwesomeIcon icon={faSearch} />*/}
                {/*    </button>*/}
                {/*</div>*/}
                <FontAwesomeIcon className=" p-3 text-primaryGrey cursor-pointer text-logo  rounded-full" icon={faUserCircle}/>
            </div>
        </nav>
    );
}

export default Navbar