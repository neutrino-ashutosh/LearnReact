import UserClass from "./UserClass";
import react from "react";

class About extends react.Component {

  constructor(props){
    super(props);
    console.log("Parent constructor called");

  }

  componentDidMount(){
    console.log("parent component mounted");
  }

  render() {
    console.log("parent render called");
    
    return (
      <div>
        <h1>About Us</h1>
        <h3>learning react and building this online restaurant like page in react</h3>
        <UserClass name={"First"} location={"Delhi"} />
        <UserClass name={"Second"} location={"US"} />
      </div>
    );
  }
}

// const About = () =>{
//   return (  
//    
     
//   );
// };

export default About;