import React from 'react';

const UsedMobilesDetails = ({ mobile, setTreatment }) => {
    console.log(mobile)
    const { name, location, mobileImg, originalPrice, publishDate, resalePrice, yearsOfUsed, information, author } = mobile;
    return (
        <div className='p-5 rounded-lg border border-red-400'>
            <img className='w-full mx-auto rounded-lg' src={mobileImg} alt="" />
            <h2 className="text-3xl font-semibold my-3">{name}</h2>
            <div className='flex justify-between mb-2'>
                <p>Original Price : <span className='text-red-500 font-semibold'>{originalPrice}</span></p>
                <p>Resaling Price : <span className='text-red-500 font-semibold'>{resalePrice}</span></p>
            </div>
            <div className='flex justify-between mb-2'>
                <p>Publish Date : <span className='text-red-500 font-semibold'>{publishDate}</span></p>
                <p>Year Of Used : <span className='text-red-500 font-semibold'>{yearsOfUsed} Years</span></p>
            </div>
            <div className='flex justify-between mb-2'>
                <p>Seller Name : <span className='text-red-500 font-semibold'>{author?.[0].authorName}</span></p>
                <p>Location : <span className='text-red-500 font-semibold'>{location}</span></p>
            </div>
                <p className='mb-3'>Rating Of Products : <span className='text-yellow-500 font-semibold'>{author?.[0].review}</span></p>
            <p className='text-gray-400'>{information}</p>
            {/* <button className='btn btn-outline w-full mt-3'>Book Now</button> */}
            <label
                className='btn btn-outline w-full mt-3'
                onClick={() => setTreatment(mobile)}
                htmlFor="booking-modal"
            >Book Now</label>
        </div>
    );
};

export default UsedMobilesDetails;