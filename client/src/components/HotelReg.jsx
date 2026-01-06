import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
        <form className='flex bg-white rounded-xl shadow-lg max-md:mx-2 max-w-4xl'>
            <img src={assets.regImage} alt="reg-IMAGE" className='w-1/2 rounded-xl hidden md:block'/>

            <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-4 w-4 cursor-pointer'/>
                <p className='text-2xl font-semibold mt-6'>Register your Hotel</p>

                {/*hotel name input*/}
                <div className='w-full mt-4'>
                    <label htmlFor="name" className='font-medium text-gray-500'>Hotel Name</label>
                    <input type="text" placeholder='Type here' id="name" className='w-full px-3 py-2.5 border outline-indigo-500 font-light border-gray-200 rounded mt-1' required />
                </div>

                {/* contact input*/}
                <div className='w-full mt-4'>
                    <label htmlFor="contact" className='font-medium text-gray-500'>Phone Number</label>
                    <input type="text" placeholder='Type here' id="contact" className='w-full px-3 py-2.5 border outline-indigo-500 font-light border-gray-200 rounded mt-1' required />
                </div>

                {/* address input*/}
                <div className='w-full mt-4'>
                    <label htmlFor="address" className='font-medium text-gray-500'>Address</label>
                    <input type="text" placeholder='Type here' id="address" className='w-full px-3 py-2.5 border outline-indigo-500 font-light border-gray-200 rounded mt-1' required />
                </div>

                {/*Select city dropdown*/}
                <div className='w-full mt-4 max-w-60 mr-auto'>
                    <label htmlFor="city" className='font-medium text-gray-500'>City</label>
                    <select id="city" className='w-full px-3 py-2.5 border outline-indigo-500 font-light border-gray-200 rounded mt-1 font-light' required>
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className='bg-indigo-500 hover:bg-indigo-600 transition-all mr-auto px-6 text-white py-2 rounded mt-6 rounded'>Register</button>

            </div>
        </form>
    </div>
  )
}

export default HotelReg