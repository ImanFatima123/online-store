import React from "react";
import PurchaseHome  from  "./components/PurchaseHome";
import PurchaseSignup from "./components/PurchaseSignup";
import PurchaseSignIn from "./components/PurchaseSignIn";
import PurchaseCategory from "./components/PurchaseCategory";
// import PurchaseCart from "./components/PurchaseCart"
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = ()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<PurchaseHome />} />
    <Route path="/PurchaseSignup" element={<PurchaseSignup />} />
    <Route path="/PurchaseSignIn" element={<PurchaseSignIn />} />
    <Route path="/PurchaseCategory" element={<PurchaseCategory />} />
    {/* <Route path="/PurchaseCart" element={<PurchaseCart />} /> */}

   

  </Routes>
  </BrowserRouter>
)
}
export default App