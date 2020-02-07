import React, { Component } from "react";
import Chef from "./chef";

// list of all orders fetched form database
class ChefList extends Component {
  state = {
    orders: []
  };

  //getting the list of orders while mounting and update to state
  componentDidMount() {
    fetch("https://tiltback.herokuapp.com/order")
      .then(res => res.json())
      .then(res => this.setState({ orders: res }))
      .catch(err => {
        ///console.log("Error ", err);
      });
  }
  // on each item it creating a cheff component to display order as card
  render() {
    return (
      <div className="orderContainer">
        {this.state.orders.reverse().map(e => (
          <Chef order={e} key={e._id} />
        ))}
      </div>
    );
  }
}

export default ChefList;
