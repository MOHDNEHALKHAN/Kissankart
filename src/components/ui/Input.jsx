import React, {useId} from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "",
    className = "bg-lime-100 text-teal-600 outline-none",
    ...props
}, ref){

    const id = useId();
    return (
             <div className='w-full'>
            {label && <label 
            className='font-inter font-semibold inline-block mb-1 pl-1 text-teal-600 ' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-xl focus:bg-gray-50 duration-200  border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )

})

export default Input;