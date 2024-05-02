/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import Noticart from '../../images/icons/notifications-cart.svg';
import Start from '../../images/icons/star.svg';
import { MyCartArray } from '../../constants/MyCart';

function MyCart({ search }) {
  const [myCartArrayUpdate, setMyCartArrayUpdate] = useState(MyCartArray)
  const [notificationPress, setNotificationPress] = useState(false)

  const handleNumberPlates = (num, i) => {
    const nextCart = myCartArrayUpdate.map((nextCart, index) => {
      if (index === i) {
        return {
          ...nextCart,
          units: nextCart.units > 0 ? nextCart.units + num : num === -1 ? nextCart.units : nextCart.units + 1
        };
      } else {
        return nextCart;
      }
    });
    setMyCartArrayUpdate(nextCart);
  }
  useEffect(() => {
    if (search !== "") {
      const filterFoods = myCartArrayUpdate.filter((player) => {
        if (player.label.toUpperCase().includes(search.toUpperCase())) {
          return true;
        }
      })
      setMyCartArrayUpdate(filterFoods)
    } else {
      setMyCartArrayUpdate(MyCartArray)
    }
  }, [search])

  useEffect(() => {
    setMyCartArrayUpdate(MyCartArray)
  }, [])
  return (
    <div className='ml-5 mt-6 sm:w-[96%] lg:w-[23%]'>
      <div className='flex'>
        <div>
          <h2 className='font-semibold text-[24px]'>My cart</h2>
          <p className='font-normal text-[15px]'>Shopping is happy</p>
        </div>
        <div className={`ml-auto right-0 sm:mr-5 lg:mr-2 cursor-pointer ${notificationPress && "border border-2 border-orange-600 bg-[#fff]"}  rounded-[100px] w-[60px] h-[60px]`} onClick={() => setNotificationPress(!notificationPress)}>
          <img src={Noticart} alt="Notification" width={28} height={33} className='mt-[12px] ml-auto mr-auto' />
        </div>
      </div>
      {/*My carts */}
      <div className='overflow-y-auto overflow-x-hidden max-h-[380px] mt-5'>
        {myCartArrayUpdate.length > 0 ? myCartArrayUpdate.map((cart, i) => {
          return (
            <div key={cart.id} className='flex bg-white mt-2 pt-3 w-[100%] md:h-[117px] lg:h-[160px] xl:h-[117px] rounded-[16px] mr-5'>
              <img src={cart.img} alt="Food2" className='sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[90px] lg:w-[80px] lg:h-[100px] xl:w-[80px] 2xl:w-[120px] xl:h-[97px] ml-4 rounded-[14px]' />
              <div className='ml-4 w-[100%]'>
                <p className='font-medium lg:text-[12px] lg:text-[14px] xl:text-[16px]'>
                  {cart.label}
                </p>
                <div className='flex'>
                  <img src={Start} alt="Start" width={13} height={12} />
                  <p className='font-medium text-[10px] ml-1'>
                    {cart.start}
                  </p>
                  <p className='font-normal text-[10px] text-[#B9B9B9] ml-1'>
                    {cart.view}
                  </p>
                </div>
                <div className='sm:flex md:flex lg:block xl:flex sm:mt-4 sm:mb-2 lg:mb-0 md:mt-6 lg:mt-2 xl:mt-6 w-[100%]'>
                  <div className='font-bold -mt-[2px] text-[16px] mr-2 '>
                    ${cart.amount}
                  </div>
                  <div className='flex font-semibold text-[24px] ml-auto justify-end right-0 mr-10 sm:-mt-2 md:-mt-2 lg:mt-5 xl:-mt-2'>
                    <div className='cursor-pointer text-white bg-[#CACACA] rounded-[100%] xl:ml-auto justify-end right-0 sm:w-[33px] sm:h-[33px] md:w-[33px] md:h-[33px] lg:w-[25px] lg:h-[25px] xl:w-[33px] xl:h-[33px] text-center' onClick={() => handleNumberPlates(-1, i)}>
                      <p className='sm:-mt-[3px] md:-mt-[3px] lg:-mt-[8px] xl:-mt-[3px]'>-</p>
                    </div>
                    <div className='lg:mt-[-8px] xl:mt-[0px] w-[35px] text-center'>
                      {cart.units}
                    </div>
                    <div className='cursor-pointer text-white bg-[#F85900] rounded-[100%] sm:w-[33px] sm:h-[33px] md:w-[33px] md:h-[33px] lg:w-[25px] lg:h-[25px] xl:w-[33px] xl:h-[33px] text-center' onClick={() => handleNumberPlates(1, i)}>
                      <p className='sm:-mt-[3px] md:-mt-[5px] lg:-mt-[8px] xl:-mt-[3px]'>+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : <div className='text-black font-bold text-[20px]'>
          No results found
        </div>}
      </div>
    </div>
  )
}

export default MyCart
