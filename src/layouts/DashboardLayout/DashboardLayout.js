import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import useSaller from '../../hooks/useSaller/useSaller';
import Navbar from '../../share/Navbar/Navbar';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSaller] = useSaller(user?.email);
    const [currentUser, setCurrentUser] = useState(null);
    // console.log(isAdmin)


    useEffect(() => {
        fetch(`https://used-mobile-server-two.vercel.app/users/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            })
    }, [user?.email])

    console.log(currentUser)

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to="/dashboard">Main Dashboard</Link></li>
                        {/* dashbord btn below */}
                        {/* {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allSellers">All Seller</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyer</Link></li>
                            </>
                        }
                        {
                            isSaller &&
                            <>
                                <li><Link to="/dashboard/addAproduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                            </>
                        } */}

                        {
                            currentUser?.role === 'admin' ?
                                <>
                                    <li><Link to="/dashboard/allSellers">All Seller</Link></li>
                                    <li><Link to="/dashboard/allBuyers">All Buyer</Link></li>
                                </>
                                : currentUser?.role === 'saller' ? 
                                <>
                                <li><Link to="/dashboard/addAproduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                                </>
                                :
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;