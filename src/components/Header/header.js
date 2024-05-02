
import React, { useState } from 'react'
import FoodHealth from '../../images/FoodHealth.svg';
import Dashboard from '../../images/dashboard.svg';
import InputSearch from '../InputSearch/InputSearch';
import NavigationMobile from '../SideNavigation/navigation-mobile';

function Header({ url, setUrl }) {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const handleOpenMenuMobile = () => {
    setOpenMenuMobile(!openMenuMobile)
  }
  return (
    <div className={`fixed z-10 sm:flex sm:bg-[#f4f5f8] lg:w-[100%] sm:w-[100%] xs:block lg:flex lg:w-[90%] ${!openMenuMobile && ""} sm:ml-[0px] pt-[20px] lg:ml-[140px] lg:bg-[#f4f5f8] sm:pb-8 lg:pb-3`}>
      <NavigationMobile openMenuMobile={openMenuMobile} handleOpenMenuMobile={handleOpenMenuMobile} url={url} setUrl={setUrl} />
      <div className={`${openMenuMobile && "sm:fixed"} sm:pl-[38px] lg:-mt-3 z-[100]`}>
        <img src={FoodHealth} alt="FoodHealth" className='z-[100] sm:w-[119px] sm:h-[30px] lg:w-[189px] lg:h-[48px] ' />
        <p className={`sm:text-[12px] lg:text-[20px] ${openMenuMobile && "sm:text-[#fff]"}`}>What do you want to eat today?</p>
      </div>
      <div className={`sm:block lg:hidden ml-auto right-0 mt-2 z-[100] ${openMenuMobile && "sm:fixed"} mr-[42px]`} onClick={handleOpenMenuMobile}>
        <img src={Dashboard} alt="Dashboard" width={33} height={34} />
      </div>
      <InputSearch />
    </div>
  )
}

export default Header
