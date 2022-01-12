import React from 'react'
import './itemcard.css'
export default function Itemcard(props) {
    const {item,onAdd} = props;
    return (
      <div className="card">
        <img src={item.image} className="card-img-top image my-3" 
        alt={item.name}/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className="card-text">
              <b>₹ {item.price}</b>
          </div>
          <div>
            <button onClick={() => onAdd(item)} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}
