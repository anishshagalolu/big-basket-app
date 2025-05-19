import { useDispatch, useSelector } from "react-redux";
import './store';   
import './Veg.css'
import { AddToCart } from "./store";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

function Veg()
{
    let vegproducts=useSelector(globalState=>globalState.products.veg);
    let dispatch=useDispatch()
    
    const[selectedRange,setSelectedRange]=useState([])
       const priceRanges=[
        {value:'Rs 10 to Rs 50',min:10,max:50},
        {value:'Rs 50 to Rs 100',min:50,max:100},
        {value:'Rs 100 to Rs 200',min:100,max:200},
        {value:'Rs 200 to Rs 500',min:200,max:500},
        {value:'Rs 500 And Above',min:500,max:Infinity},
       ];
       const handleCheckboxChange=(rangeValue)=>{
        if(selectedRange.includes(rangeValue)){
            const updated=selectedRange.filter(r=>r!==rangeValue);
            setSelectedRange(updated);
        }
        else{
            const updated=[...selectedRange,rangeValue];
            setSelectedRange(updated)
        }
       }
       const activeRanges=priceRanges.filter(range=>selectedRange.includes(range.value));
       const filtered=selectedRange.length===0?
       vegproducts:vegproducts.filter(product=>
        activeRanges.some(range=>
            product.price>=range.min && product.price<=range.max))

    let vegListItems=filtered.map((product,index)=>(
        
        <li key={index}>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3><p>{product.price} Rs</p>
            
            <button onClick={()=>{dispatch(AddToCart(product)); toast.success('Item is Added to Cart')}}>Add to Cart</button>
        </li>
     
    ))
    return (

    <div className="veg-container">
      <ToastContainer position="top-right" autoClose={3000} />
  <div className="filters">
    <h2>Filter by Price</h2>
    {priceRanges.map(range => (
      <label key={range.value}>
        <input
          type="checkbox"
          checked={selectedRange.includes(range.value)}
          onChange={() => handleCheckboxChange(range.value)}
        />
        {range.value}
      </label>
    ))}
    <button onClick={() => setSelectedRange([])}>Clear All Filters</button>
  </div>

  <div className="veg-products">
    <h1 style={{ textAlign: "center", color: "green" }}>Veg Items</h1>
    <hr />
    <ol>
      {vegListItems}
    </ol>
  </div>
</div>
    )};
export default Veg;