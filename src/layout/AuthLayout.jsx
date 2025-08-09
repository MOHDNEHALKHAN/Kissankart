/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
      setLoading(false);
      return;
    }

    if (!authentication && authStatus) {
      // wait until role is available (e.g., right after signup)
      if (!userData || userData?.prefs?.role == null) {
        return; // keep loading
      }

      const role = userData.prefs.role;
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