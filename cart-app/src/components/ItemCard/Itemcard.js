import React from "react";
export default function Itemcard(props) {
  const { item, onAdd } = props;
  return (
    <div className="card" style={{"width":"12rem"}}>
      <img
        src={item.image}
        className="card-img-top my-3"
        alt={item.name}
        style={{ "maxWidth": "8rem", "height": "7rem" }}
      />
      <div className="card-body">
        <div>
          <h5 className="card-title">{item.name}</h5>
          <span className="card-text fw-bold">₹ {item.price}</span>
        </div>
        <div>
          <button onClick={() => onAdd(item)} className="btn btn-primary my-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
