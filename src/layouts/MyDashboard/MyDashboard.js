import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const MyDashboard = () => {
    const { user } = useContext(AuthContext);

    // const url = `https://used-mobile-server-two.vercel.app/bookings?email=${user?.email}`;

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (

        <div>
            <h2 className="lg:text-6xl text-3xl text-center font-bold"><span className='text-purple-600'>Welcome</span> to Private <span className='text-red-500'>Dashboard</span></h2>
        </div>









        // <div>
        //     <h2 className='text-4xl mb-5'>MyDashboard</h2>
        //     <div className="overflow-x-auto">
        //         <table className="table w-full">
        //             <thead>
        //                 <tr>
        //                     <th></th>
        //                     <th>Name</th>
        //                     <th>Email</th>
        //                     <th>Resale Price</th>
        //                     <th>Mobile</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {
        //                     bookings?.map((booking, i) => <tr key={booking._id}>
        //                         <th>{i + 1}</th>
        //                         <td>{booking?.name}</td>
        //                         <td>{booking?.email}</td>
        //                         <td>{booking?.resalePrice}</td>
        //                         <td>{booking?.phone}</td>
        //                     </tr>)
        //                 }
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
};

export default MyDashboard;