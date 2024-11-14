import React, { useState, useEffect } from "react";

// components
import SelectedItem from '../ACTIVATED CART/INFO/SelectedItem.jsx'
import BottomSection from '../ACTIVATED CART/INFO/BottomSection.jsx';


const Info = ({ selected, setSelected, data }) => {

    const [totalPrice, setTotalPrice] = useState(0);

    const handleCalculateTotalPrice = () => {
        const result = selected.reduce((acc, item) => {

            const price = Number(item.price);
            const quantity = Number(item.quantity);

            if (!isNaN(price) && !isNaN(quantity)) {
                return acc + (price * quantity);
            }
            return acc;
        }, 0);
        console.log(result);
        setTotalPrice(result);
    }

    useEffect(() => {
        handleCalculateTotalPrice();
    }, [selected]);



    const handleRemove = (id) => {
        setSelected((prevSelected) => {
            return prevSelected.map((item) => {
                if (item.id === id) {
                    // If quantity is greater than 1, decrease it
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    // If quantity is 1, remove the item (return null for this item)
                    return null;
                }
                return item; // Keep other items unchanged
            })
                .filter(item => item !== null); // Remove null items (those with quantity 0)
        });
    }



    return (
        <div>
            <section className='mb-4'>
                {/* essa section serve para caber os itens adicionados, cada div é um item */}
                <SelectedItem
                    handleRemove={handleRemove}
                    selected={selected} />
            </section>

            {/* essa section serve para tudo que não seja os items adicionados ao carrinho */}
            <section className='flex flex-col justify-center gap-6'>
                <BottomSection
                    data={data}
                    totalPrice={totalPrice}
                    selected={selected} />
            </section>
        </div>
    )
}

export default Info;