import React from 'react';

const BookingModal = ({ treatment }) => {
    console.log(treatment)
    const { name, location, mobileImg, originalPrice, publishDate, resalePrice, yearsOfUsed, information } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='w-11/12' src={mobileImg} alt="" />
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form>
                    {/* <input type="text" value={`Mobile Info : ${information}`} className="input input-bordered input-secondary w-full mt-3 " disabled /> */}
                    <input type="text" value={`Location : ${location}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input type="text" value={`Original Price : ${originalPrice} Taka`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input type="text" value={`Resale Price : ${resalePrice} Taka`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input type="text" value={`Publish Date : ${publishDate}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input type="text" value={`Years of Used : ${yearsOfUsed}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input className='btn btn-outline w-full mt-3' type="submit" value="Book Now" />
                    </form>
                    {/* <p className="py-4">{information}</p>
                    <p>{location}</p>
                    <p>{originalPrice}</p>
                    <p>{resalePrice}</p>
                    <p>{publishDate}</p>
                    <p>{yearsOfUsed}</p>
                    <label
                        className='btn btn-outline w-full mt-3'
                        htmlFor="booking-modal"
                    >Book Now</label> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;