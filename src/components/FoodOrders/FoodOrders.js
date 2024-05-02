/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { FoodsOrdersArray } from '../../constants/FoodsOrders'

function FoodOrders({ search }) {
  const [statusOrder, setStatusOrder] = useState("Order")
  const [FoodsOrdersArrayUpdate, setFoodsOrdersArrayUpdate] = useState(FoodsOrdersArray)

  useEffect(() => {
    if (search !== "") {
      const filterFoods = FoodsOrdersArray.filter((player) => {
        if (player.label.toUpperCase().includes(search.toUpperCase())) {
          return true;
        }
      })
      setFoodsOrdersArrayUpdate(filterFoods)
    } else {
      setFoodsOrdersArrayUpdate(FoodsOrdersArray)
    }
  }, [search])
  return (
    <div>
      <div className='flex sm:gap-[170px] lg:gap-10 sm:ml-6 lg:ml-[0px] mt-[40px]'>
        <div onClick={() => setStatusOrder("Order")} className={`text-[20px] ${statusOrder === "Order" ? "border-[#000] border-b border-b-2" : "text-[#B9B9B9]"} font-medium cursor-pointer`}>Order</div>
        <div onClick={() => setStatusOrder("Delivered")} className={`text-[20px] ${statusOrder === "Delivered" ? "border-[#000] font-medium border-b border-b-2" : "text-[#B9B9B9]"} font-medium cursor-pointer`}>Delivered</div>
        <div onClick={() => setStatusOrder("Finished")} className={`text-[20px] ${statusOrder === "Finished" ? "border-[#000] font-medium border-b border-b-2" : "text-[#B9B9B9]"} font-medium cursor-pointer`}>Finished</div>
        <div onClick={() => setStatusOrder("All")} className={`text-[20px] sm:hidden lg:block text-[#F85900] font-medium ml-auto right-0 cursor-pointer`}>See all</div>
      </div>
      <div className='mt-[15px] lg:ml-[-2px] sm:ml-[20px]'>
        {FoodsOrdersArrayUpdate.length > 0 ? FoodsOrdersArrayUpdate.map(food => {
          return (
            <div key={food.id} className={`flex bg-white rounded-[16px] h-[100px] mt-3 ${statusOrder === "All" ? "" : food.status !== statusOrder ? "hidden" : ""}`}>
              <img src={food.img} alt={food.label} width={13} height={12} className='w-[91px] h-[80px] ml-4 mt-3 rounded-[14px]' />
              <div>
                <div className="ml-[30px] mt-[20px] text-[20px] font-medium">{food.label} </div>
                <div className="ml-[30px] mt-[10px] text-[#B9B9B9] text-[20px] font-medium">{food.fecha}</div>
              </div>
              <div className='ml-auto right-0 place-content-center mr-[15px]'>
                <button className="bg-[#F85900] hover:bg-orange-500 text-white font-medium text-[16px] py-2 px-4 rounded-[100px]">
                  Order Again
                </button>
              </div>
            </div>
          )
        }
        ) : <div className='text-black font-bold text-[20px] text-center mt-4'>
          No results found
        </div>}
      </div>
    </div>
  )
}

export default FoodOrders
