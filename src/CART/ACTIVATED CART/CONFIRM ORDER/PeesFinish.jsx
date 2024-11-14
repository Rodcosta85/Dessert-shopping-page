import React from "react";

const PeesFinish = ({ item }) => {

    return (
        <>
            <p className='mb-[7px] text-rose-950 text-[14px] font-bold'>{item.name}</p>
            <div className='flex flex-row items-center gap-3'>
                <p className='text-red text-[18px] font-semibold mr-3'>{item.quantity}x</p>
                <p className='text-dark-pink'>@ {item.price}</p>
            </div>
        </>
    )
}

export default PeesFinish;