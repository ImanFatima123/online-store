import React,{useState} from 'react'
import PrUser from "../assets/User name icon.png"
import PrContact from "../assets/contact.png"
import PrEmail from "../assets/Email icon.png"
import PrPassword from "../assets/Password icon.png"
import { useNavigate } from "react-router-dom"

const PurchaseSignup = () => {
    const navigate = useNavigate()

    const [sale,setPurchase] = useState();
  return (
    <div className="purchase-signup">
 
    <p className="purchase-p3"> Saylani Welfare</p>
    <p className="purchase-p4"> Online Market Place</p>
    <div className='main-input-1'>
    <input placeholder='User Name' className='input-1' />
     <img src={PrUser} alt="" className='user-img'/>
    </div>
    <div className='main-input-2'>
    <input placeholder='Contact' className='input-2' />
     <img src={PrContact} alt="" className='contact-img'/>
    </div>
    <div className='main-input-3'>
    <input placeholder='Email' className='input-3' />
     <img src={PrEmail} alt="" className='email-img'/>
    </div>
    <div className='main-input-4'>
    <input placeholder='Password' className='input-4' />
     <img src={PrPassword} alt="" className='password-img'/>
    </div>
    <div className='radio-1'>
     <input type="radio"  name="select" value="sale" onChange={e=>sale(e.target.value)} />Sale
     <input type="radio" className='my-radio' name="select" value="purchase" onChange={e=>setPurchase(e.target.value)} />Purchase
    </div>

  <button className="purchase-btn" onClick={()=>navigate("/PurchaseSignIn")}>Sign Up</button>
  </div>
  )
}

export default PurchaseSignup
