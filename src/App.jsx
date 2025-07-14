import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Temp from "./components/Temp.jsx";
import Game from "./components/Game.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";
import Orders from "./components/Orders.jsx";
import Product from "./components/Product.jsx";
import Products from "./components/Products.jsx";
import Users from "./components/Users.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  //props - properties - to give arguments in our components
  //21 is a js expression and we write js exp inside a curly brace
  return (
    <div>
      {/* <Home name="John" age={21} /> */}
      {/* <Temp flag={true} /> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Product/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="order" element={<Order/>}/>
          <Route path="admin" element={<Admin/>}>
          <Route index element={<Users/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="orders" element={<Orders/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
