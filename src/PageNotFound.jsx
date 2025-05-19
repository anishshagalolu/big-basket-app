import React, { useEffect, useState } from 'react'
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  
  let[showThankYou,setThankYou]=useState(false);
    let  navigate=useNavigate();
   useEffect(()=>{setThankYou(true);
           setTimeout(()=>{navigate("/Home");},5000);
   })
          
  return (
    <>
      <h1 style={{textAlign:'center'}}>404-Not Found</h1>
      <h2 style={{textAlign:'center'}}>The page you are looking does not exist</h2>
       {showThankYou && (
  <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2 style={{ color: "green" }}>
      Page Not Found Redirecting to the Home Page...
    </h2>
    <div className="loading-dots">
      <span></span>
      <span></span>
      <span></span>
      </div>
  </div>
  )}
      <img src='/images/page.png' width={1500} height={700} />
    </>
  )
}

export default PageNotFound;
