import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER"
    ); 

    const json = await data.json();
    // console.log(json); to check the object for figuring out hierarchy in which destructuring is required
    setResInfo(json?.data);
  }

  if(resInfo === null)  return <Shimmer /> 

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};
  
  return(  
    <div className="menu">
       <h1> {name} </h1>
       <p> {cuisines.join(",")} - {costForTwoMessage} </p>
       <h2> Menu </h2>
       <ul>
       {itemCards.map((item) =>(
         <li key={item.card.info.id}>
          { item.card.info.name } - {"₹"}  
          {item.card.info.price/100 || item.card.info.defaultPrice/100} 
         </li> ))}
       </ul>
    </div>
  );
};

export default RestaurantMenu;

