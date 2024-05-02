import React from 'react'
import { Visit } from '../../constants/VisitData'

function VisitData() {
  return (
    <div className='grid grid-cols-2 gap-2 sm:mt-6 lg:mt-[0px] sm:w-[95%] lg:w-[23%] h-[202px] rounded-[14px] ml-4'>
      {
        Visit.map(visit => {
          return (
            <div key={visit.id} className='bg-white items-center place-content-center rounded-[8px]'>
              <p className='text-[#B9B9B9] text-center items-center text-[12px]'>{visit.label}</p>
              <h2 className='text-[24px] font-semibold text-center'>{visit.amount}k</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default VisitData
