import "./styles.css";
export function Item({ label, quantity, onDecrement, onIncrement, onReset, setQuantity }) {

  const handleChange = (e) => {
    const { target } = e;
    setQuantity(+target.value)
}

return (
  <div className="Item">
    <p className="label">{label}</p>
    <input 
    className="qty" type="text" value={quantity} onChange={handleChange}/>
    {/* <p className="qty">Quantidade: {quantity.initial}</p> */}
    <button onClick={() => onDecrement(1)}>-</button>
    <button onClick={onReset}>Restaurar</button>
    <button onClick={() => onIncrement(1)}>+</button>
  </div>
);
}
