
import { useState,useEffect } from "react";


const User = ({name}) =>{
    const [count,setcount] = useState(0);

   
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Use Effect is rendering...");
        },1000);

        return () => {
            
            clearInterval(timer);
            console.log("Use Effect is unmounting...");
        };
    },[]);

    return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{setcount(count + 1)}}>Click me</button>
        <h2>Name: {name}</h2>
        <h3>Role: Frontend Developer</h3>
        <h4>Location: Delhi</h4>
        <h4>Contact: neutrino.ashutosh@gmail.com </h4>
    </div>
    );
};
export default User;