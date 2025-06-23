import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-teal-600",
    textColor = "text-white",
    className = "",
    ...props
})
{
    return(
        <button
            type={type}
            className={`px-4 py-2 rounded-xl font-inter font-semibold cursor-pointer ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}