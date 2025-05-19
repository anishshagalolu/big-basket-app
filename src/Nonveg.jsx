import { useDispatch, useSelector } from 'react-redux';
import './store.js'
import './Veg.css'; // Reusing Veg.css styles
import { AddToCart } from './store';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function Nonveg() {
    const nonvegProducts = useSelector(globalState => globalState.products.nonveg);
    const dispatch = useDispatch();
        const[selectedRange,setSelectedRange]=useState([])
           const priceRanges=[
            {value:'Rs 100 to Rs 200',min:100,max:200},
            {value:'Rs 200 to Rs 400',min:200,max:400},
            {value:'Rs 400 to Rs 600',min:400,max:600},
            {value:'Rs 600 to Rs 1000',min:600,max:1000},
            {value:'Rs 1000 And Above',min:1000,max:Infinity},
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
           nonvegProducts:nonvegProducts.filter(product=>
            activeRanges.some(range=>
                product.price>=range.min && product.price<=range.max))
    

    const nonvegListItems = filtered.map((product, index) => (
        <li key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} Rs</p>
            <button onClick={() =>{ dispatch(AddToCart(product)); toast.success('Item is Added to Cart');}}>Add To Cart</button>
        </li>
    ));

    return (
        
        
         <div className="veg-container">
        
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
       <ToastContainer position='top-right' autoClose={3000}/>
            <h1 style={{ textAlign: "center", color: 'red', textDecoration: 'underline' }}>
                Non Veg Items
            </h1>
            <hr />
           
                <ol>
                    {nonvegListItems}
                </ol>
            </div>
            </div>
    );
}

export default Nonveg;
