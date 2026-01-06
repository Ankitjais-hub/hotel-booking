import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../../assets/assets';
import StarRating from '../StarRating';

const RoomDetails = () => {
    const {id}=useParams();
    const [room,setRoom]=useState(null);
    const [mainImage,setMainImage]=useState(null);

    useEffect(() => {
       const room= roomsDummyData.find(room=>room._id===id);
       room && setRoom(room);
       room && setMainImage(room.images[0]); 
    },[]);

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/*Room Details Header*/}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} 
                <span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>

        {/*Room rating*/}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating />
            <p className='ml-2'>200+ reviews</p>
        </div>

        {/*Room Address*/}
        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt="Location Icon" />
            <span>{room.hotel.address}</span>
        </div>

        {/*Room Images*/}
        <div className='flex flex-col lg:flex-row gap-6 mt-8'>
            <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="room-image" 
            className='w-full rounded-xl shsdow-lg object-cover' />
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room ? room.images.length > 1 && room.images.map((image, index) => (
                    <img onClick={() => setMainImage(image)} key={index} src={image} alt="room-image" 
                    className={`w-full rounded-xl shadow-lg object-cover ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
                )):"null"}
            </div>
        </div>

        {/*Room Details*/}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap items-center mt-4 gap-4'>
                    {room.amenities.map((amenity, index) => (
                        <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                            <img src={facilityIcons[amenity]} alt={amenity} className='w-5 h-5'/>
                            <p className='text-xs'>{amenity}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Room Price an*/}
        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
        </div>
      {/*checkin checkout*/}
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)]
      p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

            <div className='flex flex-col'>
                <label htmlFor="checkInDate" className='font-medium'>Check-in </label>
                <input type="date" id='checkInDate' placeholder='Check-in'
                className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>

            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

            <div className='flex flex-col'>
                <label htmlFor="checkOutDate" className='font-medium'>Check-out </label>
                <input type="date" id='checkOutDate' placeholder='Check-out'
                className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>

            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

            <div className='flex flex-col'>
                <label htmlFor="guests" className='font-medium'>Guests </label>
                <input type="number" id='guests' placeholder='0'
                className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>

        </div>
        <button type='submit' className='bg-blue-800 active:scale-95 text-white py-3 rounded-md font-medium hover:bg-blue-900 transition-all max-md:w-full max-md:mt-6 
        md:px-25 md:py-4 text-base cursor-pointer'>
            Check Availability
        </button>

      </form>

      {/*common specifications */}

      <div className='mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
            <div key={index} className='flex flex-col gap-2'>
                <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                <div>
                <p className='text-base'>{spec.title}</p>
                <p className='text-gray-500 '>{spec.description}</p>
                </div>
            </div>
        ))}
      </div>

      {/*room description*/}
      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>Rooms will be allocated at the ground floor according to availability. You get a comfortable
            two bedroom accommodation with all standard amenities including free Wi-Fi, air conditioning,
            flat-screen TV, mini-bar, tea/coffee making facilities, and an en-suite bathroom with complimentary toiletries.
            Room service is available 24/7 to cater to your dining needs. Enjoy stunning views
            from the room's large windows. Daily housekeeping ensures your room is clean and tidy throughout your stay.
        </p>
      </div>

      {/* owner details */}
      <div className='flex  items-start gap-4'>
        <div className='flex gap-4'>
            <img src={room.hotel.owner.image} alt="host" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
        </div>
        <div>
            <p className='text-lg md'>Hosted By {room.hotel.name}</p>
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2 text-gray-500'>200+ reviews</p>
            </div>
        </div>
      </div>
      <button className='px-6 py-2.5 mt-4 rounded text-white bg-blue-800 hover:bg-blue-900 transition-all cursor-pointer'>Contact Now</button>
        
    </div>
  )
}

export default RoomDetails