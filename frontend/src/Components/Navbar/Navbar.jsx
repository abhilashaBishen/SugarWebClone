import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
function Navbar() {
    const [menu,setMenu] = useState('shop');
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("lips")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/lips'>LIPS</Link> {menu ==="lips"? <hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("eyes")}}> <Link style={{ textDecoration: 'none',color:'inherit' }}to ='/eyes'>EYES</Link>  {menu ==="eyes"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("face")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/face'>FACE </Link> {menu ==="face"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("nail")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/nail'>NAIL </Link>  {menu ==="nail"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("skincare")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/skincare'>SKIN CARE</Link>  {menu ==="skincare"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/accessories'>ACCESSORIES</Link>  {menu ==="accessories"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("gifting")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/gifting'>GIFTING</Link>  {menu ==="gifting"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bestseller")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/bestseller'>BEST SELLER</Link>  {menu ==="bestseller"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("newlaunch")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/newlaunch'>NEW LAUNCH</Link>  {menu ==="newlaunch"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("offer")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/offer'>OFFER</Link>  {menu ==="offer"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blog")}}><Link style={{ textDecoration: 'none',color:'inherit' }}to ='/blog'>BLOG 
        </Link> {menu ==="blog"? <hr/>:<></>}</li>
      </ul>
      {/* <div className='nav-login-cart'>
    <Link to ='/cart'><img src = {cart_icon}/></Link>
    <div className='nav-cart-count'>0</div>
      </div> */}
    </div>
  )
}

export default Navbar
