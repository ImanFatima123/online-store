import React from 'react'
import Cart from '../assets/Cart icon.png'
import Location from '../assets/Location icon.png'
import notification from '../assets/notification icon.png'
import Grocery from "../assets/Grocery (1).png"
import Next from "../assets/Next icon.png"
import Search from "../assets/Search icon.png"

const PurchaseCategory = () => {
  return (
    <div className='purchase-category'>
     <p className="purchase-p5"> Saylani Welfare  <img src= {Cart} className="cart-img" alt = ""/>
        <img className='location-img' src= {Location} alt = ""/>
        <img className='nf-img' src= {notification} alt = ""/></p>
      <p className="purchase-p6"> Online Market Place</p>
   <img src={Grocery} className="grocery-img" alt=""/>
   <div className='shop'>
      <p className='shop-text'>Shop by Category</p>
      <img src={Next} className="next-img" alt=""/>
   </div>
   <div class="box">
<img src={Search} alt=""/>


<input type="text" name=""/>

</div>
  
    </div>

  )
}

export default PurchaseCategory

