import React, { Component } from "react";
import MenuItem from "./menuItem";
import "./menuList.css";

//list of menu items are rendered in this compnent
class MenuList extends Component {
  state = {};

  // fetching menu list from the api and updating state
  componentDidMount() {
    fetch("https://tiltback.herokuapp.com/menu")
      .then(res => res.json())
      .then(res => this.setState({ menu: res }))
      .catch(err => {
      //  console.log("Error ", err);
      });
  }
  render() {
    if (!this.state.menu) {
      return <div className="menuList">Loading.....</div>;
    } else {
      return (
        <div className="menuList">
          {this.state.menu.map(e => (
            <MenuItem itemDetails={e} key={e._id} />
          ))}
        </div>
      );
    }
  }
}

export default MenuList;
