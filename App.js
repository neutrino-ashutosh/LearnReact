import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ()=> {
    return (
        <div className='header'>
            <div className="nav-container">
                <div className='logo-container'>
                <img 
                    className="logo" 
                    src="https://img.freepik.com/free-vector/gradient-restaurant-logo-design_23-2151257026.jpg?t=st=1738682551~exp=1738686151~hmac=c5d49e51c2ffa701c0d2e025eb51f52a0ab54d88d1a75025ec7a62e7878afc31&w=740" 
                />
                </div>
                    <ul className='nav-items'>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    ) ;
} ;

const RestaurantCard = ()=>{
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src='https://b.zmtcdn.com/data/pictures/chains/4/301124/14e6cc1af3acfec0dd270e879cdd187e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A'
                />
            <h3> Fat Lulu's </h3>
            <h4> Italian </h4>
            <h4> 4.3 </h4>
            <h4> 57 minutes </h4>

        </div>
    )
}

const Body = ()=>{
    return (
        <div className='body'>
            <div className='search'> Search </div>
            <div className='res-container'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);