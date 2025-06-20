import React from "react";
import { Button, Input } from "../../components/index";

function Login() {
  return (
    <div className="relative bg-green-50 flex flex-col justify-center items-center h-screen gap-20 overflow-hidden">
      <img src="src/assets/Farmer-Logo.svg" alt="farmer logo" />
      <form action="" className="flex flex-col gap-7 mx-10">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <a
          href=""
          className="font-inter font-semibold text-center text-blue-600"
        >
          Forgot your Password?
        </a>
        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>

      <p className="font-inter font-medium text-teal-600">
        Don’t have any account?{" "}
        <a href="" className="font-inter font-semibold text-blue-600">
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Login;
