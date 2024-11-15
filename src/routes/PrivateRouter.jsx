import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const { pathname } = useLocation()

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={pathname} to='/auth/login'></Navigate>;
};

export default PrivateRouter;