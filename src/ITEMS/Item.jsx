import React from "react";

import AddButton from './BUTTONS/AddButton.jsx';
import CounterButton from './BUTTONS/CounterButton.jsx';

const Item = ({ data, changeImgSize, itemQuantity, handleIncrease, handleDecrease }) => {
  return (
    <>
      {data.map((item) => (
        <div
          id='cards'
          className='mobile:h-[370px] 
              desktop:h-[400px] desktop:w-[300px] desktop:mr-8
              smallDesk:h-[350px] smallDesk:w-[250px] smallDesk:mr-7
              tablet:h-[400px] tablet:w-[360px]'
          key={item.id}>
          <img
            key={item.id}
            src={changeImgSize(item.image)}
            alt={item.alt}
            className={!itemQuantity(item.id) > 0 ? 'rounded-[10px]' : 'rounded-[10px] border-red border-[2px]'}
          />
          <div id='addBtn' className='flex justify-center translate-y-[-23px]'>
            {!itemQuantity(item.id) > 0 ?
              <AddButton
                handleAddButton={() => handleIncrease(item.id)} />
              :
              <CounterButton
                data={itemQuantity(item.id)}
                // queremos que a função seja chamada imediatamente, e não em uma ação específica
                handleDecrease={() => handleDecrease(item.id)}
                // a função precisa receber o parametro e não pode ser chamada direta porque vai esperar para ser executada
                handleIncrease={() => handleIncrease(item.id)} />}
          </div>
          <p className='text-dark-pink mb-1 
                mobile:text-[16px] 
                desktop:text-[16px] 
                smallDesk:text-[14px]'>{item.category}</p>
          <p className='text-rose-950 font-bold mb-1 
                mobile:text-[18px] 
                desktop:text-[18px] 
                smallDesk:text-[16px] '>{item.name}</p>
          <p className='text-red font-bold 
                mobile:text-[18px] 
                desktop:text-[18px] 
                smallDesk:text-[17px] '>
            ${item.price.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
      ))}
    </>
  )
}

export default Item;