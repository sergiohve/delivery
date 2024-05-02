import React from 'react'
import { useDispatch } from 'react-redux';
import { searchReducer } from '../../redux/slices/searchSlice';

function InputSearch() {
  const dispatch = useDispatch();
  const handleChangeSearch = (e) => {
    dispatch(searchReducer(e.target.value))
  }
  return (
    <form className="sm:hidden xs:hidden lg:block ml-auto right-0 mr-[20px] w-[70%] lg:mt-[0px]">
      <div className="relative">
        <input type="text" id="buscar" onChange={(e) => handleChangeSearch(e)} className="w-[812px] h-[61px] bg-white border
        border-white text-gray-900 text-sm rounded-[100px] focus:ring-blue-500
        focus:border-blue-500 block w-full pl-5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 placeholder:text-[20px] dark:text-white dark:focus:ring-blue-500
        dark:focus:border-blue-500 w-[100%]" placeholder="Search" />
        <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
      </div>
    </form>
  )
}

export default InputSearch
