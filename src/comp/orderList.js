import React, { Component } from "react";
import OrderItem from "./orders";
import "./menuList.css";
import axios from "axios";

class OrdersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      order: {
        table: "",
        orders: []
      }
    };
  }

  //fetching menu and updating state
  componentDidMount() {
    fetch("https://tiltback.herokuapp.com/menu")
      .then(res => res.json())
      .then(res => {
        this.setState({ menu: res });
      })
      .catch(err => {
      //  console.log("Error ", err);
      });
  }

  // event to be triggerd on pressing + key
  add = (key, e) => {
    e.preventDefault();

    let { order } = { ...this.state };
    if (order.orders === undefined) {
      order.orders = [];
    }

    if (order.orders.hasOwnProperty(key)) {
      order.orders[key]++;
    } else {
      order.orders[key] = 1;
    }
    this.setState({ order });
  };

  // event to be triggerd on pressing - key
  remove = (key, e) => {
    e.preventDefault();

    let { order } = { ...this.state };
    if (order.orders === undefined) {
      order.orders = [];
    }

    if (order.orders.hasOwnProperty(key)) {
      order.orders[key]--;
      if (order.orders[key] === 0) {
        delete order.orders;
      }
    }

    this.setState({ order });
  };

  table = e => {
    let order = { ...this.state.order.table };
    order.table = e.target.value;
    order.orders = { ...this.state.order.orders };
    this.setState({ order });
  };

  //on pressing place order the post request was generated to save data to database
  submit = async e => {
    e.preventDefault();
    if (this.state.order.table !== "") {
      await axios
        .post("https://tiltback.herokuapp.com/order", this.state.order, {
          headers: { "Content-Type": "application/json" }
        })
        .then(() => {
          alert("Sucess...!");
          window.location.reload();
        })
        .catch(err => {
         // console.log(err);
          alert("Not accepted...!");
        });
    } else {
      alert("Enter Table No");
    }
  };
  render() {
    let d = new Date();
    let hour = d.getHours();  //order can be place only during working hours 7 - 23
    // let serve = hour<12?"bre":(hour<=16?"lun":"din")
    if (hour < 23 && hour >= 7) {
      return (
        <form>
          <div className="menuList">
            <input
              type="text"
              placeholder="Enter Table no"
              id="table"
              value={this.state.order.table}
              className="orderItem table"
              onChange={this.table}
              required
            />
            {this.state.menu.map(e => (
              <OrderItem
                item={e.Name}
                count={e.count}
                add={this.add}
                remove={this.remove}
                key={e._id}
              />
            ))}
            <input
              type="submit"
              className="btn place addButton"
              value="Place Order"
              onClick={this.submit}
            />
          </div>
        </form>
      );
    } else {
      return <div className="noServing">No servings now.....</div>;
    }
  }
}

export default OrdersList;
