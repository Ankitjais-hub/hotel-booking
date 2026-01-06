import React, { useState } from 'react'
import Title from '../../Title';
import { assets } from '../../../assets/assets';

const AddRoom = () => {

  const [images, setImages] = useState({1: null, 2: null, 3: null, 4: null});
  const [input, setInput] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'wifi': false,
      'Pool Acess': false,
      'Breakfast': false,
      'RoomService': false,
    },
  });
  return (
    <form className='flex flex-col'>
      <Title align="left" fon="Outfit" title="Add New Room" subtitle='Easily add new rooms to your hotel listing by providing essential details and images. Ensure your guests have all the information they need to make a booking.' />

        {/*upload images*/}
          <p className='text-gray-800 mt-10'>Images</p>
          <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key) => (
              <div key={key} className='mb-4'>
                <label htmlFor={`image${key}`} className='block text-gray-700 font-medium mb-2'>
                  <img className='max-h-13 cursor-pointer opacity-80'
                  src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />

                  <input
                  type="file"
                  accept='image/*'
                  id={`image${key}`}
                  hidden
                  className='border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  onChange={(e) => setImages({...images, [key]: e.target.files[0]})}
                />
                </label>
              </div>
            ))}
          </div>
          
          <div className='w-full flex max-sm:flex-col sm:gap-4 mt-2'>
            <div className='flex-1 max-w-48'>
              <p className='text-gray-800 mt-4'>Room Type</p>
              <select value={input.roomType} onChange={(e) => setInput({...input, roomType: e.target.value})}
              className='border opcity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                <option value="">Select Room Type</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Luxury Room">Luxury Room</option>
                <option value="Family Suite">Family Suite</option>
              </select>
            </div>

            <div className='flex-1 max-w-48'>
              <p className='text-gray-800 mt-4'>Price <span className='text-xs'>/night</span></p>
              <input type="number" placeholder="0" value={input.pricePerNight} onChange={(e) => setInput({...input, pricePerNight: e.target.value})}
              className='border border-gray-300 mt-1 rounded p-2 w-24' />
            </div>
          </div>

          <p className='text-gray-800 mt-8'>Amenities</p>
          <div className='flex flex-col flex-wrap text-gray-400 max-w-sm mt-1'>
            {Object.keys(input.amenities).map((amenity, index) => (
              <div key={index} className='flex items-center gap-2 mb-2'> 
                <input
                  type="checkbox"
                  id={`amenities${index+1}`}
                  checked={input.amenities[amenity]}
                  onChange={(e) => setInput({
                    ...input,
                    amenities: {
                      ...input.amenities,
                      [amenity]: !input.amenities[amenity]
                    }
                  })}
                />
                <label htmlFor={`amenities${index+1}`} className='text-gray-400'> {amenity}</label>
               </div>
    
            ))}
          </div>

          <button type='submit' className='bg-blue-600 hover:bg-blue-700 w-1/5 text-white font-medium py-2 px-8 rounded mt-5 cursor-pointer'>
            Add Room
          </button>
    </form>
  )
}

export default AddRoom