import React from "react";

import Remove from '../../../assets/symbols/icon-remove-item.svg';
import PeesInfo from '../PeesInfo.jsx';

const SelectedItem = ({ handleRemove, selected }) => {
    return (
        <>
            {selected.map(item => (
                <div id='item' className='border-b-gray-300 border-b-[1px] flex flex-row items-center h-20 mb-[8px]' key={item.id}>
                    <div className='flex flex-col
                    mobile:w-[255px] 
                    desktop:w-[320px]
                    smallDesk:w-[239px]
                    tablet:w-[300px]
                    '>
                        <PeesInfo item={item} />
                    </div>
                    <button onClick={() => handleRemove(item.id)} className='w-5 h-5 rounded-full border-x-pink border-[1px] flex justify-center items-center'>
                        <img src={Remove} alt="an X (remove) button" />
                    </button>
                </div>
            ))}
        </>
    )
}

export default SelectedItem;