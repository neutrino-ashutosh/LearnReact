import { Link } from "react-router-dom";
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
                  <li >
                    <Link to= "/"> Home </Link>
                  </li>
                  <li>
                    <Link to= "/about"> About </Link>
                  </li>
                  <li>
                    <Link to= "/contact"> Contact </Link>
                  </li>
                  <li>
                    cart 
                  </li>
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