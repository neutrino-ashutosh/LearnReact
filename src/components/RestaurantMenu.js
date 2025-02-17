import { useEffect, useState } from "react";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5399515&lng=77.25915789999999&restaurantId=450016&catalog_qa=undefined&submitAction=ENTER"
    ); 

    const json = await data.json();
    setResInfo(json?.data);
  }
  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || {};

  return(  
    <div className="menu">
       <h1> {name} </h1>
       <p> {cuisines.join(",")} - {costForTwoMessage} </p>
       <h2> Menu </h2>
       <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>pizza</li>
       </ul>
    </div>
  );
};

export default RestaurantMenu;

