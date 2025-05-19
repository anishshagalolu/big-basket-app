import { useSelector } from "react-redux";
import './order.css';

function Orders() {
  const orderProduct = useSelector(globalState => globalState.orders);

  const orderListItems = orderProduct.map((order, index) => (
    <li key={index}>
      <ul>
           <p><strong>Order Date:</strong> {new Date().toLocaleString()}</p>
           <p><strong>Order ID:</strong> #{order.orderId}</p>
        {order.items.map((item ,index)=> (
          <li key={index}>
         
            <img src={item.image} alt={item.name}/>
           <span> Item:{item.name}<h1></h1> Price:₹{item.price} x {item.quantity}</span>
            
          </li>
          
        ))}
      
      </ul>
    </li>
    
  ));
  

  return (
    <>
    <div className="order-container">
    <h2>Purchase History</h2>
    {orderProduct.length===0?(
      <p>No purchase History Available</p>
    ):(
      <>

      <h1>Order Items</h1>
      <ol>{orderListItems}</ol>
    
      
      </>
    )}
    </div>
    </>

  );
}

export default Orders;
