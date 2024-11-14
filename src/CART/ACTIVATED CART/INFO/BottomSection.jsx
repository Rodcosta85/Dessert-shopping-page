import React from "react";
import { useState } from "react";

// symbol
import Tree from '../../../assets/symbols/icon-carbon-neutral.svg';

// component
import FinishOrder from "../CONFIRM ORDER/FinishOrder.jsx";



const BottomSection = ({ totalPrice, selected, data }) => {

    const [Finish, setFinish] = useState(true);
    const showOverlay = () => {
        setFinish(false);
        if (window.innerWidth = 375) {
            window.scrollTo({
                top: 0,
                behavior: 'instant', // Adds a smooth scrolling effect
            });
        }
    }


    return (
        <>
            <div className='flex flex-row items-center mobile:justify-between'>
                <p className='font-medium desktop:mr-[200px]'>Order Total</p>
                <h2 className='text-[20px] font-bold'>${totalPrice}</h2>
            </div>
            <div className='h-11 flex flex-row justify-center items-center bg-rose-50 rounded-[10px]'>
                <img src={Tree} alt='a drawing of a green tree' className='mr-2' />
                <p className='font-medium text-[13px]'>This is a <strong>carbon-neutral</strong> delivery</p>
            </div>
            <button
                onClick={showOverlay}
                className='h-11 bg-red hover:bg-hover-red  rounded-[20px] text-white font-semibold'>
                Confirm Order
            </button>
            {Finish ? '' :
                <FinishOrder
                    data={data}
                    selected={selected}
                    totalPrice={totalPrice}
                />}
        </>
    )
}

export default BottomSection;