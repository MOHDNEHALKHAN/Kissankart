import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData); // <-- get userData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication && !authStatus) {
      // user not logged in, trying to access protected route
      navigate("/login");
    } else if (!authentication && authStatus) {
      // user logged in, trying to access public route
      let role = "";
      if (userData && userData.labels && userData.labels[0]) {
        role = userData.labels[0];
      }
      if (role === "seller") {
        navigate("/seller/", { replace: true });
      } else if (role === "buyer") {
        navigate("/buyer/", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
    setLoading(false);
  }, [authentication, authStatus, userData, navigate]);

  return loading ? (
    <h1 className="text-center mt-10 text-xl">Loading...</h1>
  ) : (
    <>{children}</>
  );
}

export default AuthLayout;
