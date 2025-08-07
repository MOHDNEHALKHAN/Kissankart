import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import authService from "../../services/appwrite/auth";

function Verify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    if (userId && secret) {
      authService.account.updateVerification(userId, secret)
        .then(() => {
          setMessage("Email verified successfully!");
        })
        .catch(() => {
          setMessage("Verification failed or link expired.");
        });
    } else {
      setMessage("Invalid verification link.");
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-amber-50">
      <h1 className="text-xl font-semibold text-teal-600">{message}</h1>
    </div>
  );
}

export default Verify;