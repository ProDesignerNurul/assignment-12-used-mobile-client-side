
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSaller from '../../hooks/useSaller/useSaller';
import Loading from '../../share/Loading/Loading';

const SallerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSaller, isSallerLoading] = useSaller(user?.email);
    const location = useLocation();

    if(loading || isSallerLoading) {
        return <Loading></Loading>
    }

    if(user || isSaller) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default SallerRoute;