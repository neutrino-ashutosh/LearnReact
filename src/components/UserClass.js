import React from "react";  //React.component will come from here

class UserClass extends React.Component{

    constructor(props){
        super(props);  //Why super is used? Calls the parent class constructor, which is required to initialize the new component 

        console.log(props);
        this.state = {
            userInfo :{
                //Default data
                name: "Dummy",
                location : "delhi",
                
                

            },
            count : 0,
        };
    }

    async componentDidMount(){
        console.log(" Child component is Mounted");

        const data = await fetch('https://api.github.com/users/neutrino-ashutosh');
        const json =  await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        });
    }
    render(){

        return(
           <div className="user-card">
              <h1>Count: {this.state.count}</h1>

              <button 
                onClick = {() => {
                   this.setState({
                     count : this.state.count + 1,
                   });
                }}>Click me
               </button>
               <br/><br/>

               <img src= {this.state.userInfo.avatar_url}></img>

              <h2>Name: {this.state.userInfo.name}</h2>

              <h3>Role: Frontend Developer</h3>
              <h4>Location:{this.state.userInfo.location}</h4>
              <h4>Contact: neutrino.ashutosh@gmail.com</h4>
           </div>
        )
    }
}

export default UserClass;