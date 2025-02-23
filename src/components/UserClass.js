import React from 'react';

class UserClass extends React.Component {

  constructor (props) {
    super(props); //why do we always have to write it ??
    this.state = {
      count : 0,
    };

    console.log(this.props.name + "child constructor called");
    // console.log( props);
  }

  componentDidMount() {
    console.log( this.props.name +"child component mounted");
  }

  render() {

    console.log(this.props.name + "child render called");

    const {name , location } = this.props;
    const {count } = this.state;

    return (
      <div className="user-card">
        <h1> count : {count} </h1>
          <button onClick={() =>{
            this.setState({count : count + 1});
          }}> Count Increase </button>
     
        <h2> Name : {name} </h2>
        <h3> Location : {location} </h3>
        <h3> Contact : neutrino.ashutosh@gmail.com </h3>
      </div>
    )
  }
}

export default UserClass;