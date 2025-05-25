import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Milk from "./Milk";
import Chocolate from "./Chocolate";
import Cart from "./Cart";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Orders from "./Order";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css';
import { logOut } from "./store";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  let dispatch=useDispatch();
  let cartItems = useSelector((state) => state.cart);
  let totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isAuthenticated=useSelector((state)=>state.users.isAuthenticated);
  const currentUser=useSelector((state) => state.users.currentUser);

  return (
    <BrowserRouter>
      {/* Fixed Top Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <img src="https://cdn.dribbble.com/users/5821386/screenshots/16016909/fresh_mart_logo.png" height="60px"/>
          <Link to="/Home" className="nav-link">🏠 Home</Link>
          <Link to="/Veg" className="nav-link">🥦 Veg Items</Link>
          <Link to="/Nonveg" className="nav-link">🍗 Non Veg Items</Link>
          <Link to="/Milk" className="nav-link">🥛 Milk Items</Link>
          <Link to="/Chocolate" className="nav-link">🍫 Chocolate Items</Link>
          <Link to="/Cart" className="nav-link">🛒 Cart ({totalCartCount})</Link>
          <Link to="/Order" className="nav-link">Order</Link>
          <Link to="/AboutUs" className="nav-link">About Us</Link>
          <Link to="/ContactUs" className="nav-link">📞 Contact Us</Link>
          {isAuthenticated?(
            <div>
              <span>Welcome,{currentUser.username}</span>
              <button onClick={()=>dispatch(logOut())}>Log Out</button>
              </div>
          ):(
            <Link to='/signin'>Sign In</Link>
          )}

        </div>
      </nav>

      <div style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/Nonveg" element={<Nonveg />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/Chocolate" element={<Chocolate />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<Orders />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
