import React from "react";

const Pees = ({ item }) => {

    return (
        <>
            <p className='mb-[7px] text-rose-950 text-[17px] font-bold'>{item.name}</p>
            <div className='flex flex-row items-center gap-3'>
                <p className='text-red text-[18px] font-semibold'>{item.quantity}x</p>
                <p className='text-dark-pink'>@ {item.price}</p>
                <p className='text-rose-950 font-medium'>${item.price * item.quantity}</p>
            </div>
        </>
    )
}

export default Pees;