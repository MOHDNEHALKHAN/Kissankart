import React from "react";
import { useNavigate, useLocation } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div>
      <footer className="flex flex-row justify-evenly items-center rounded-xl shadow-sm  bg-white mx-4 my-5 py-3 gap-8">
        <svg
          onClick={() => navigate('/seller/')}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`icon icon-tabler icons-tabler-filled icon-tabler-home cursor-pointer ${isActive("/seller/") ? "fill-sky-600" : "fill-indigo-950"}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
        </svg>

        <svg
          onClick={() => navigate('/seller/profile')}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`icon icon-tabler icons-tabler-filled icon-tabler-user cursor-pointer ${isActive("/seller/profile") ? "fill-sky-600" : "fill-indigo-950"}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
          <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
        </svg>

        <svg
          onClick={() => navigate('/seller/orders')}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`icon icon-tabler icons-tabler-filled icon-tabler-truck cursor-pointer ${isActive("/seller/orders") ? "fill-sky-600" : "fill-indigo-950"}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783 .378l.074 .108l3 5l.055 .103l.04 .107l.029 .109l.016 .11l.003 .085v6a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2zm-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m.434 -9h-3.434v3h5.234z" />
        </svg>
      </footer>
    </div>
  );
}
