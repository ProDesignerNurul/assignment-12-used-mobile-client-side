import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../share/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {

    const [deletingSeller, setDeletingSeller ] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    };



    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://used-mobile-server-two.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteSeller = seller => {
        fetch(`https://used-mobile-server-two.vercel.app/users/${seller?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then( res => res.json())
        .then( data => {
            if(data.deletedCount > 0) {
                refetch();
                toast.success(`Seller ${seller?.name} Deleted Successfull..`)
            }
        })
    };



    const handleMakeAdmin = id => {
        fetch(`https://used-mobile-server-two.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin successfull');
                    refetch();
                }
            })
    }



    return (
        <div>
            <h2 className='text-center text-4xl font-semibold mb-3'>All <span className='text-lime-600'>Seller</span> Below</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs btn-secondary'>Make Admin</button>}</td>
                                <td>
                                    <label onClick={() => setDeletingSeller(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-warning">Delete</label>
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deletingSeller && <ConfirmationModal
                title={`Are You Sure You Want to Delete This Seller?`}
                message={`Be Carefull. If You Delete ${deletingSeller?.name} , You Will Not Recover It After Deleting`}
                successAction={handleDeleteSeller}
                successButtonName="Delete"
                modalData={deletingSeller}
                closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;