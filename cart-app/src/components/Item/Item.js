import React from 'react'
import './item.css'
export default function Item(props) {
    const {item} = props;
    return (
      <div className="card">
        <img
          src={item.image}
          className="card-img-top image my-3"
          alt={item.name}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className='card-text'> 
            <b>₹ {item.price}</b>
          </p>
          <div>
              <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    );
}
