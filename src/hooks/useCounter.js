import React, { useState } from 'react';

export default function useCounter({min, max, initial}){
    const [quantity, setQuantity] = useState(initial);
    const onIncrement = (num) => {
        quantity === max ? setQuantity(max) :
        setQuantity(quantity+num)}
    const onDecrement = (num) => {
        quantity === min ? setQuantity(min) :
        setQuantity(quantity-num)
    }
    const onReset = () => {setQuantity(0)}

    return{
        value: quantity,
        onIncrement,
        onDecrement,
        onReset,
        setQuantity
    }
}
