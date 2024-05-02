/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { CategoriesArray } from '../../constants/Categories'


function Categories({ search }) {
  const [categoriesArrayUpdate, setCategoriesArrayUpdate] = useState(CategoriesArray)

  useEffect(() => {
    if (search !== "") {
      const filterCateg = CategoriesArray.filter((item) => {
        if (item.label.toUpperCase().includes(search.toUpperCase())) {
          return true;
        }
      })
      setCategoriesArrayUpdate(filterCateg)
    } else {
      setCategoriesArrayUpdate(CategoriesArray)
    }
  }, [search])
  return (
    <div className='mt-2 lg:w-[100%] h-[180px] sm:ml-5 lg:ml-[0px]'>
      <h3 className='font-semibold text-[24px]'>Categories</h3>
      <div className='grid grid-cols-3 gap-3 mt-2'>
        {categoriesArrayUpdate.length > 0 ?
          categoriesArrayUpdate.map(categ => {
            return (
              <div key={categ.id} className=''>
                <img src={categ.img} alt={categ.label} width={13} height={12} className=' bg-gradient-to-t to-[#000] from-[#000] w-[100%] h-[160px] place-content-end rounded-[14px]
                 text-white font-semibold' />
                <p className='absolute z-0 -mt-[40px] ml-6 text-white'>
                  {categ.label}
                </p>
              </div>
            )
          }) : <div className='text-black font-bold text-[20px]'>
            No results found
          </div>
        }
      </div>
    </div>
  )
}
export default Categories
