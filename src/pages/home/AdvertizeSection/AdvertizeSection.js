import React from 'react';
import { Link } from 'react-router-dom';
import AddImg1 from '../../../images/advertizingImg/addImg1.png';
import AddImg2 from '../../../images/advertizingImg/addImg2.png';
import BuyingImg from '../../../images/advertizingImg/buying.png';

const AdvertizeSection = () => {
    return (
        <div>
            {/* <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-lg place-items-center">
                    
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h2>Advertizing Your Used Phones</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus quam sequi nulla sit reiciendis mollitia non quas qui id?</p>
                            <button>Add Your Phone</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='flex p-5 mt-10 shadow-lg rounded-lg'>
                <div className='flex items-center p-5 lg:w-1/2'>
                    <img className='w-36 mr-5' src={AddImg1} alt="" />
                    <div>
                        <h2 className='text-3xl font-semibold'>Advertizing Your Used Phones</h2>
                        <p className='mt-4'>Just Click Add Button and Submit Your Phone Information</p>
                        <button className='btn btn-xs btn-outline mt-4'>Add Your Phone</button>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='flex items-center p-5 lg:w-1/2'>
                    <img className='w-36 mr-5' src={AddImg2} alt="" />
                    <div>
                        <h2 className='text-3xl font-semibold'>Advertizing Your Used Tablet</h2>
                        <p className='mt-4'>Just Click Add Button and Submit Your Tablet Information</p>
                        <button className='btn btn-xs btn-outline mt-4'>Add Your Tablet</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center p-5 mt-10 shadow-2xl rounded-lg'>

            <div className='flex items-center p-5'>
                    <img className='w-44 mr-5' src={BuyingImg} alt="" />
                    <div>
                        <h2 className='text-3xl font-semibold'>Buy Any Used Mobile/Tablets Very Lowest Prices </h2>
                        <p className='mt-4'>Just Click Shop Button and Buy Any Used Mobile / Tablets Very Lowest Price</p>
                        <button className='btn btn-xs btn-outline mt-4'><Link to="/usedMobiles">Visit Our Shop</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertizeSection;