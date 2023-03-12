import React,{useState} from 'react'
import PrUser from "../assets/User name icon.png"
import PrEmail from "../assets/Email icon.png"
import PrPassword from "../assets/Password icon.png"
import { useNavigate } from "react-router-dom"

const PurchaseSignIn = () => {
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

    <div className='main-input-5'>
    <input placeholder='Email' className='input-5' />
     <img src={PrEmail} alt="" className='email2-img'/>
    </div>
    <div className='main-input-6'>
    <input placeholder='Password' className='input-6' />
     <img src={PrPassword} alt="" className='password2-img'/>
    </div>
    <div className='My-forgot'>
    <p className='f-password'>Forgot Password?</p>

    </div>
    <div className='radio-1'>
     <input type="radio"  name="select" value="sale" onChange={e=>sale(e.target.value)} />Sale
     <input type="radio" className='my-radio' name="select" value="purchase" onChange={e=>setPurchase(e.target.value)} />Purchase
    </div>

  <button className="purchase-btn" onClick={()=>navigate("/PurchaseCategory")}>Sign In</button>
  </div>
  )
}

export default PurchaseSignIn
