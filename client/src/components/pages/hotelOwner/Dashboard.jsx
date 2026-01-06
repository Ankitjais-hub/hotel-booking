import React, { useState } from 'react'
import Title from '../../Title'
import { assets, dashboardDummyData } from '../../../assets/assets'

const DashBoard = () => {
    const[dashBoardData, setDashboardData] =useState(dashboardDummyData)
  return (
    <div>
        <Title align="left" fon="Outfit" title="Dashboard" subtitle='Monitor your rooms listing, track bookings and analyze revenue
        - all in one place. Stay updated with real-time insights to ensure optimal performance.' />

        <div className='flex gap-8 my-8'>

            {/*total bookings*/}
            <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10'/>
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Bookings</p>
                    <p className='text-neutral-400 text-base'>{dashBoardData.totalBookings}</p>
                </div>
            </div>

            {/*total revenue*/}
            <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10'/>
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Revenue</p>
                    <p className='text-neutral-400 text-base'>$ {dashBoardData.totalRevenue}</p>
                </div>
            </div>
        </div>
        {/*recent bookings*/}
        <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
            <table className='w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                        <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
                    </tr>
                </thead>

                <tbody className='text-sm'>
                    {dashBoardData.bookings.map((booking, index) => (
                        <tr key={index} className='border-b border-gray-200'>
                            <td className='py-3 px-4 text-gray-700 border-t font-medium'>{booking.user.username}</td>
                            <td className='py-3 px-4 text-gray-700 border-t font-medium max-sm:hidden'>{booking.room.roomType}</td>
                            <td className='py-3 px-4 text-gray-700 border-t font-medium text-center'>$ {booking.totalPrice}</td>
                            <td className='py-3 px-4 text-gray-700 border-t font-medium text-center'>
                                <button className={`py-1 px-3 text-xs rounded-full mx-auto ${booking.isPaid ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-red-600'}`}>
                                    {booking.isPaid ? 'Completed' : 'Pending'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>    
            </table>
        </div>
    </div>
  )
}

export default DashBoard