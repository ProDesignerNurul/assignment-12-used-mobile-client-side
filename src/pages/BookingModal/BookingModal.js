import React from 'react';

const BookingModal = ({ treatment, setTreatment }) => {
    const { name, location, mobileImg, originalPrice, publishDate, resalePrice, yearsOfUsed, information } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking = {
            location,
            originalPrice,
            resalePrice,
            publishDate,
            yearsOfUsed,
            name,
            email,
            phone
        }

        console.log(name, email, phone)
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='w-11/12' src={mobileImg} alt="" />
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                    {/* <input type="text" value={`Mobile Info : ${information}`} className="input input-bordered input-secondary w-full mt-3 " disabled /> */}
                    <input name="location" type="text" value={`Location : ${location}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input name="originalPrice" type="text" value={`Original Price : ${originalPrice} Taka`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input name="resalePrice" type="text" value={`Resale Price : ${resalePrice} Taka`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input name="publishDate" type="text" value={`Publish Date : ${publishDate}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input name="yearsOfUsed" type="text" value={`Years of Used : ${yearsOfUsed}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                    <input name="name" type="text" placeholder='Your Name' className="input input-bordered input-secondary w-full mt-3 "  />
                    <input name="email" type="email" placeholder='Your Email' className="input input-bordered input-secondary w-full mt-3 "  />
                    <input name="phone" type="text" placeholder='Your Phone' className="input input-bordered input-secondary w-full mt-3 "  />
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