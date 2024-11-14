import React, { useState } from "react";

import decrement from '../../assets/symbols/icon-decrement-quantity.svg'
import decrementCopy from '../../assets/symbols/icon-decrement-COPY.svg'

import increment from '../../assets/symbols/icon-increment-quantity.svg'
import incrementCopy from '../../assets/symbols/icon-increment-COPY.svg'


const CounterButton = ({ data, handleDecrease, handleIncrease }) => {

    const [svgSrcMinus, setSvgSrcMinus] = useState(decrement);
    const [svgSrcPlus, setSvgSrcPlus] = useState(increment);

    return (
        <div className=' bg-red rounded-[25px] flex flex-row justify-evenly items-center
        mobile:w-[190px] mobile:h-[45px]
        desktop:w-[190px] desktop:h-[45px]
        smallDesk:w-[160px] smallDesk:h-[40px]
        tablet:w-[230px] tablet:h-[50px]
       '>
            <button
                onClick={handleDecrease}
                className='w-6 h-6 border-[1px] border-white rounded-full flex justify-center items-center hover:bg-white hover:border-none
                mobile:mr-10
                desktop:mr-10
                smallDesk:mr-7
                tablet:mr-16'
                onMouseOver={() => setSvgSrcMinus(decrementCopy)}
                onMouseOut={() => setSvgSrcMinus(decrement)}
            >
                <img src={svgSrcMinus} alt="less symbol" />
            </button>
            <p className='text-white font-semibold 
            mobile:text-[16px]
            desktop:text-[16px]
            smallDesk:text-[14px]
            tablet:text-[17px]
            '>{data}</p>
            <button
                onClick={handleIncrease}
                className='w-6 h-6 border-[1px] border-white rounded-full flex justify-center items-center hover:bg-white hover:border-none 
            mobile:ml-10
            desktop:ml-10
            smallDesk:ml-7
            tablet:ml-16'
                onMouseOver={() => setSvgSrcPlus(incrementCopy)}
                onMouseOut={() => setSvgSrcPlus(increment)}
            >
                <img src={svgSrcPlus} alt="plus symbol" />
            </button>
        </div>
    )
}

export default CounterButton;