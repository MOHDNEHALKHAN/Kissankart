import { useState } from "react";
import { Button, Input } from "../../components/index";
import logo from "../../assets/FarmerLogo.svg";
import { useNavigate } from "react-router";
import authService from "../../services/appwrite/auth";
import { login } from "../../functions/auth/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const [visiblePassword, setvisiblePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      await authService.createAccount(data);

      await authService.updatePrefs({ role: data.role });

      const updatedUser = await authService.getCurrentUser();

      const mergedUser = updatedUser? { ...updatedUser, prefs: { ...(updatedUser.prefs || {}), role: data.role }, }: null;
      if (mergedUser) dispatch(login({ userData: mergedUser }));

      authService.sendVerification();

      // Immediate redirect based on selected role for better UX
      const role = data.role;
      if (role === "seller") {
        navigate("/seller/", { replace: true });
      } else if (role === "buyer") {
        navigate("/buyer/", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.code === 400) {
        setError("Password must be at least 8 characters long.");
      } else {
        setError("Email already exists.");
      }
    }
  };
  return (
    <div className="relative bg-green-50 flex flex-col justify-center items-center h-screen gap-10 overflow-hidden">
      <img src={logo} alt="farmer logo" />

      <form
        onSubmit={handleSubmit(create)}
        className="flex flex-col gap-6 mx-10"
      >
        <Input
          label="Name"
          type="name"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
        <div className="w-full relative">
          <Input
            label="Password"
            type={visiblePassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <span
            className="absolute top-[38px] right-3 cursor-pointer text-teal-600"
            onClick={() => setvisiblePassword((prev) => !prev)}
          >
            {visiblePassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </span>
        </div>

        <div className="w-full">
          <p className="font-inter font-semibold mb-1 pl-1 text-teal-600">
            Select Role
          </p>
          <div className="flex items-center gap-6 px-1">
            <label className="flex items-center gap-1 text-blue-600 font-medium">
              <Input
                type="radio"
                name="role"
                value="buyer"
                className="accent-gray-400 cursor-pointer"
                {...register("role", { required: true })}
              />
              Buyer
            </label>
            <label className="flex items-center gap-1 text-blue-600 font-medium">
              <Input
                type="radio"
                name="role"
                value="seller"
                className="accent-gray-400 cursor-pointer"
                {...register("role", { required: true })}
              />
              Seller
            </label>
          </div>
        </div>

        {error && (
          <p className="text-red-600 font-inter text-center">{error}</p>
        )}
        <Button type="submit" className="w-full bg-teal-600 text-white">
          Sign Up
        </Button>
      </form>
      <p className="font-inter font-medium text-teal-600">
        Already have an account?{" "}
        <a
          onClick={() => navigate("/login")}
          className="font-inter font-semibold text-blue-600 cursor-pointer"
        >
          Log In
        </a>
      </p>
    </div>
  );
}

export default Signup;