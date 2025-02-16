import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = ()=> {
    const [btnNameReact, setBtnNameReact] = useState("login");
    
    useEffect(()=>{
        console.log(btnNameReact);
    },[btnNameReact])

    console.log("Header Rendered");
  return (
      <div className='header'>
          <div className="nav-container">
              <div className='logo-container'>
              <img 
                  className="logo" 
                  src={LOGO_URL}
              />
              </div>
                  <ul className='nav-items'>
                  <li>Home</li>
                  <li>About US</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
                  <button
                   className="login"
                   onClick={()=>{
                    btnNameReact === "login" ?
                    setBtnNameReact("logout") :
                    setBtnNameReact("login");
                   }}
                  >
                    {btnNameReact}
                  </button>
              </ul>
          </div>
      </div>
  ) ;
} ;

export default Header ;