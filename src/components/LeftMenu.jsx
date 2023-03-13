import React from 'react';
import "../styles/LeftMenu.css";
import { Menu } from './Menu';
import{CiMenuFries} from "react-icons/ci";
import {FaSpotify} from "react-icons/fa";
import { MenuList } from './MenuList';
import { MenuList1 } from './MenuList1';
import { MenuList2 } from './MenuList2';


function LeftMenu() {
  return (
    <div className='leftMenu'>
        
        <div className="hamburger">
            <i>
                <CiMenuFries/>
            </i>
        </div>
        
        <div className="logoContainer">
        <div className="logo">
          <i>
            <FaSpotify />
          </i>

          <h2>Spo<span className="blackShade">tify</span></h2>
        </div>
        </div>

        <Menu //title={"Menu"}  
        
        menuObject={ MenuList}/>

<Menu title={"Discover"}  
        
        menuObject={ MenuList1}/>


<Menu title={"Your Collection"}  
        
        menuObject={ MenuList2}/>
    </div>
  )
}

export {LeftMenu}