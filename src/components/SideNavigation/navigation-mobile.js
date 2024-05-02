import React from 'react'
import { MenuNavigation } from '../../constants/MenuNavigation';
import { Link } from 'react-router-dom';

function NavigationMobile({ openMenuMobile, handleOpenMenuMobile, url, setUrl }) {
  return (
    <ul className={`fixed z-10 ${!openMenuMobile && "hidden"} sm:pl-2 sm:w-[100%] -mt-[20px] pt-[100px] sm:h-[300px] sm:bg-[#000] sm:opacity-90`}>
      {
        MenuNavigation.map(item => {
          return (
            <Link key={item.id} to={item.path} onClick={() => {
              handleOpenMenuMobile();
              setUrl(item.path)
            }
            }>
              <li className={`ml-8 mt-[2px] ${item.path === url ? "text-orange-600" : "text-white"}  font-bold text-[18px]`} >
                {item.label}
              </li>
            </Link>
          )
        })
      }
    </ul>
  )
}

export default NavigationMobile
