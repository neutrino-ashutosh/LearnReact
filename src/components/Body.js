import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
  


  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5399515&lng=77.25915789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json);
  }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> Looks like you are offline !!! please check your internet connection </h1>
  }

  if (listOfRestaurants.length === 0) {return <Shimmer />}

  return (

    
    <div className='body'>

      <div className='filter'> 

        <div className="search">
          <input type="text" 
          className="search-box" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} ></input>
          <button onClick={() => {

            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);

          }}>
            Search</button>
        </div>
        
        <button className='filter-btn'
          onClick={()=> {
          const filteredList = listOfRestaurants.filter(
            (res)=> res.info.avgRating > 4.4
          );
          setListOfRestaurants(filteredList);
          }}
          >
            Top Rated Restaurants 
        </button>

      </div>

      <div className='res-container'>
        {filteredRestaurant.map((restaurant)=> (
          <Link 
          key={restaurant.info.id}
          to={"/restaurant/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}               

      </div>
      
    </div>
  )
}

export default Body ;