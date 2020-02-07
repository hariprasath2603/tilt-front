import React from "react";
import "./chef.css";

//idividual card of orderd item in chef list
const Chef = props => {
  const { table, order } = props.order;
  return (
    <div className="orders">  
      
      <h2>Table No : {table}</h2> 

      {Object.keys(order[0]).map(e => (
        <div key={e}>
          {e} - {order[0][e]}  
        </div>
      ))}
    </div>
  );
};

export default Chef;
