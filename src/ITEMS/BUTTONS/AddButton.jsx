import React from "react";


import addToCart from '../../assets/symbols/icon-add-to-cart.svg';

const AddButton = ({ handleAddButton }) => {

    return (
        <button
            onClick={() => handleAddButton()}
            className='flex flex-row justify-center items-center bg-white border-red border-[1.5px] rounded-[25px]
             mobile:w-[190px] mobile:h-[45px]
             desktop:w-[190px] desktop:h-[45px]
             smallDesk:w-[160px] smallDesk:h-[40px]
             tablet:w-[230px] tablet:h-[50px]
            '>
            <img src={addToCart} alt="add to cart symbol" />
            <p className='font-semibold text-rose-950 ml-[8px]
            mobile:text-[16px]
            desktop:text-[16px]
            smallDesk:text-[14px]
            tablet:text-[17px]
            '>Add to Cart</p>
        </button>
    )
}

export default AddButton