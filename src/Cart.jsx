import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'; // Make sure this is correctly imported
import { DecCart, IncCart, orderDetails, Remove, RemoveCart } from './store';
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { toast, ToastContainer } from 'react-toastify';
import confetti from 'canvas-confetti';

function Cart() 
{
    let cartObjects = useSelector(globalState => globalState.cart);
    const orderHistory = useSelector(globalState => globalState.orders);
    const emailRef=useRef();
    const [customerEmail, setCustomerEmail] = useState('');
    let [paymentMethod,setPaymentMethod]=useState('')
    let [discountPercentage,setDiscountPercentage]=useState(0);
    let[showThankYou,setThankYou]=useState(false);
    let navigate=useNavigate();
    let[couponName,setCouponName]=useState('');
    const couponCodeRef=useRef();

     let [timeLeft, setTimeLeft] = useState(600)
   let[couponCodeDiscountPer,setCouponCodeDiscountPer]=useState(0);
    let dispatch = useDispatch();
    useEffect(() => {
    if (cartObjects.length > 0 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cartObjects.length, timeLeft]);
   useEffect(() => {
    if (timeLeft === 0) {
      alert("Time's up! Please reorder.");
      dispatch(RemoveCart());
      navigate('/Home');
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };


    let handlingCouponPer=()=>{
        const couponCode=couponCodeRef.current.value.trim().toUpperCase();
        switch(couponCode)
        {
            case 'DIWALI10':
                setCouponCodeDiscountPer(10);
                setCouponName('DIWALI10');
                break;
            case 'DIWALI20':
                setCouponCodeDiscountPer(20);
                setCouponName('DIWALI20');
                break;
            case 'DIWALI30':
                setCouponCodeDiscountPer(30);
                setCouponName('DIWALI30');
                break;
             default:alert('Invalid Coupon Code');
                setCouponCodeDiscountPer(0);
                setCouponName('');
        }
    }
    let countingAmount=()=>{
        let totalPrice=cartObjects.reduce((totalPrice,item)=>totalPrice+item.price*item.quantity,0)
        let discount=(totalPrice*discountPercentage)/100;
        let couponDiscount=(totalPrice*couponCodeDiscountPer)/100;
        let priceAfterdiscount=totalPrice-discount;
        let taxPrice=(priceAfterdiscount*5)/100;
        let finalPrice=priceAfterdiscount+taxPrice-couponDiscount;
        return{totalPrice,discount,taxPrice,finalPrice,couponDiscount};
    }
        const{totalPrice,discount,taxPrice,finalPrice,couponDiscount}=countingAmount();
    
    
       
    let cartListItems = cartObjects.map((item, index) => (
        <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
                <p><strong>{item.name}</strong></p>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <div className="cart-buttons">
                <button onClick={() => {dispatch(IncCart(item)); toast.success('Items Added In Cart')}}>+</button>
                <button onClick={() => {dispatch(DecCart(item)); toast.error('Items Reduced From Cart')  }}>-</button>
                <button onClick={() =>{ dispatch(Remove(item)); toast.error('Item Removed From Cart')}}>Remove</button>
            </div>
            
        </li>
       
    )
    
)
   let handlingCart = () => {
    confetti({
    particleCount: 250,
    spread: 70,
    origin: { y: 0.6 }
  });
  const productDate = new Date().toLocaleDateString();
  const orderId = `ORD-${orderHistory.length + 1}`;

  let purchaseDetails = {
    orderId: orderId,
    date: productDate,
    items: [...cartObjects],
    finalPrice: finalPrice
  };

  dispatch(RemoveCart());
  dispatch(orderDetails(purchaseDetails));
  setThankYou(true);
const balloon = document.createElement('div');
balloon.className = 'balloon-popper';
document.body.appendChild(balloon);
setTimeout(() => document.body.removeChild(balloon), 6000);

  setTimeout(() => {
    navigate("/order");
  }, 5000);
  
const shipping=50;
  const templateParams = {
    order_id: orderId,
    orders: cartObjects.map(item => ({
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity,
      image:item.image
    })),
    cost: {
      shipping: shipping,
      priceAfterDiscount:discount.toFixed(2),
      couponDiscount:couponDiscount.toFixed(2),
      tax: taxPrice.toFixed(2),
      total: (shipping+finalPrice).toFixed(2)
    },
    email:customerEmail
  };

  emailjs.send('service_pglwuv9', 'template_rpxvg0x', templateParams, 'n7T_-JWfU9EXJFjIr')
    .then(() => {
      alert('✅ Email sent successfully!');
    })
    .catch((error) => {
      alert('❌ Email sending failed: ' + error.text);
    });
};

            
        return (
  <div className="cart-container">
    <ToastContainer position='top-right' autoClose={3000} />
    {cartObjects.length > 0 ? (
      <>
        <h1>These are your Cart Items</h1>
        <hr></hr>
        <ol className="cart-list">{cartListItems}</ol>
        <h2 style={{ color: 'red' }}>
  Complete your payment in: {formatTime(timeLeft)}
</h2>
        <h3 style={{ textAlign: 'center' }}></h3>
        <div className="cart-summary">
          <h1 style={{ color: 'navyblue' }}>Order Summary</h1>
          <h2>Your Total Price is: ₹{totalPrice.toFixed(2)}</h2>
          <button onClick={() => setDiscountPercentage(10)}>Apply 10% Discount</button>
          <button onClick={() => setDiscountPercentage(20)}>Apply 20% Discount</button>
          <button onClick={() => setDiscountPercentage(30)}>Apply 30% Discount</button>
          <h2>Your Discount Price is: ₹{discount.toFixed(2)}</h2>
          <div className="coupon-section">
            <input type='text' ref={couponCodeRef} placeholder='Enter Coupon Code' className="coupon-input"/>

            <button onClick={handlingCouponPer}>Add Coupon Code</button>
          </div> 
          Coupon <strong style={{color:'green'}}>{couponName}</strong> applied: {couponCodeDiscountPer}% off
          <h2>Your Coupon Discount for {couponName}: ₹{couponDiscount.toFixed(2)}</h2>
          <h2>Your Tax Price is: ₹{taxPrice.toFixed(2)}</h2>
          <h2>Your Final Price is: ₹{finalPrice.toFixed(2)}</h2>
          

          <div>
            <h3>Select Payment Option </h3>
            <button onClick={()=>setPaymentMethod('qr')}>QR Code</button>
            <button onClick={()=>setPaymentMethod('card')}>Card</button>
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Enter Your Gmail to Recieve Order Confirmation
            </label>
            <input type='email' ref={emailRef}
            onChange={(e=>setCustomerEmail(e.target.value))}
            className='form-control'
            placeholder='you@example.com'/>
          </div>
         
          {paymentMethod==='qr'&&(
            <div>
              <h4>Scan UPI QR to Pay ₹{finalPrice.toFixed(2)}</h4>
            <QRCode 
             value={`upi://pay?pa=9398939726@axl&pn=AnishStore&am=${finalPrice.toFixed(2)}&cu=INR`} />

              <p>UPI Id:9398939726@axl</p>
            </div>
            
            
            )}
            {paymentMethod === 'card' && (
  <div className="card p-4 mt-3 shadow-sm">
    <h5 className="mb-3">Enter Card Details</h5>
    <div className="mb-3">
      <label className="form-label">Card Number</label>
      <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
    </div>
    <div className="mb-3">
      <label className="form-label">Card Holder Name</label>
      <input type="text" className="form-control" placeholder="Card Holder Name" />
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <label className="form-label">Expiry Date</label>
        <input type="text" className="form-control" placeholder="MM/YY" />
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">CVV</label>
        <input type="password" className="form-control" placeholder="***" />
      </div>
    </div>
  </div>
)}
 <button onClick={handlingCart}>Order Now</button>
        </div>

      </>
    ) : (
        <>
         
         {showThankYou && (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2 style={{ color: "green" }}>
      Thank you for your purchase! Redirecting to orders...
    </h2>
    <div className="loading-dots">
      <span></span>
      <span></span>
      <span></span>
      </div>
  </div>
  )}
       <img src='/images/cart.jpg' width={700} height={700}/>
      <h1 style={{ textAlign: 'center', color: 'black' }}>Cart is Empty</h1>
        </>
    )}
  </div>
);
}
export default Cart;
