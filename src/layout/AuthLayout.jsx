import React , {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function AuthLayout({children , authentication = true}) {
const navigate = useNavigate();
const authStatus = useSelector((state) => state.auth.status);
const [loading , setLoading] = useState(true);

useEffect(() => {
    if (authentication && !authStatus) {
        //user not logged in , trying to access protected route
        navigate("/login");
    } else if (!authentication && authStatus) {
        //user logged in , trying to access public route
        navigate("/");
    }

    setLoading(false);
}, [authentication, authStatus, navigate]);

  return (
    loading ? <h1 className="text-center mt-10 text-xl">Loading...</h1> : <>{children}</>
  )
}

export default AuthLayout