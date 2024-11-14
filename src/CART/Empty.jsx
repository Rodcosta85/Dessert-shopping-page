import React from "react";

import CakeImg from '../assets/symbols/illustration-empty-cart.svg'

const Empty = () => {
    return (
        <div id='cake+p' className='flex flex-col mt-[20px]'>
            <div className='flex justify-center mb-[12px]'>
                <img src={CakeImg} alt="image of a naked cake with its slice" />
            </div>
            <p className='text-dark-pink text-[14px] desktop:text-[16px] text-center font-semibold '>Your added items will appear here</p>
        </div>
    )
}

export default Empty;