import React, { Component } from "react";
import "./orders.css";

//each item inside the order was rendered
class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // set value based on the button increment
  inc() {
    let count = this.state.count + 1;
    this.setState({ count });
  }
  //for decrement action
  dec() {
    if (this.state.count > 0) {
      let count = this.state.count - 1;
      this.setState({ count });
    }
  }
  
  render() {
    let props = this.props;
    return (
      <div className="orderItem">
        <span className="orderName">{props.item}</span>
        <button
          className="addButton btn"
          onClick={e => {
            props.add(props.item, e);
            this.inc();
          }}
        >
          +
        </button>
        <button
          className="removeButton btn"
          onClick={e => {
            props.remove(props.item, e);
            this.dec();
          }}
        >
          -
        </button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default OrderItem;
