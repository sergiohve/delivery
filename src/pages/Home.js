import React from 'react'
import MenuDiscount from '../components/MenuDiscount/MenuDiscount'
import VisitData from '../components/VisitData/VisitData'
import Categories from '../components/Categories/Categories'
import FoodOrders from '../components/FoodOrders/FoodOrders'
import MyCart from '../components/MyCart/MyCart'
import { useSelector } from 'react-redux'

function Home() {
  const search = useSelector((state) => state.search)

  return (
    <div className='lg:mt-[110px] sm:ml-[0px] md:ml-[0px] lg:ml-[30px] mb-4'>
      <div className='lg:flex sm:block w-[100%] sm:pt-[100px] lg:pt-[0px]'>
        <MenuDiscount />
        <VisitData />
      </div>
      <div className='sm:block lg:flex'>
        <div className='sm:w-[98%] lg:w-[74%]'>
          <Categories search={search} />
          <FoodOrders search={search} />
        </div>
        <MyCart search={search} />
      </div>
    </div>
  )
}

export default Home
