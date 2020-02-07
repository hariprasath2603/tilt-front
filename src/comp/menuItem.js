import React from "react";
import "./menuItem.css";

//each item in a menu will appear seperately with styles here
const MenuItem = props => {
  const { Name, Price, din, lun, bre } = props.itemDetails;
  return (
    <div className="menuItem">
      <span className="foodName">{Name}</span>
      <span className="foodPrice">$ {Price}</span>
      <span className="timing">
        <span className="served">{bre ? "Ba" : null}</span>
        <span className="served">{lun ? "Lu" : null}</span>
        <span className="served">{din ? "Di" : null}</span>
      </span>
    </div>
  );
};

export default MenuItem;
