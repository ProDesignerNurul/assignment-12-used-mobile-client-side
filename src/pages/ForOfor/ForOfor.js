import React from 'react';
import { Link } from 'react-router-dom';
import ForOforImg from '../../images/404-img/404Img2.gif';


const ForOfor = () => {
    return (
        <div className='lg:w-1/2 mx-auto p-5 flex justify-center items-center'>
            <div>
            <img src={ForOforImg} alt="" />
            <button className='btn btn-outline w-full font-semibold'><Link to="/">Go to Home</Link></button>
            </div>
        </div>
    );
};

export default ForOfor;