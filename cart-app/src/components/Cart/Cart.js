import React from "react";

export default function Cart(props) {
  const { onAdd, cartItems, onRemove, countCartItems } = props;
  const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <div className="col-4 bg-light">
      <h1 className="text-center">Cart Items</h1>

      {countCartItems ? (
        <h1>
          <span className="badge bg-secondary">{countCartItems}</span>
        </h1>
      ) : (
        ""
      )}

      <div>
        {cartItems.length === 0 && (
          <div className="alert alert-warning">Cart is Empty</div>
        )}

        {cartItems.map((item, index) => (
          <div key={item.id} className="alert alert-secondary">
            <div>
              {index + 1}. {item.name}
            </div>
            <div>
              <button
                onClick={() => onAdd(item)}
                className="btn btn-success btn mx-1">
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className="btn btn-danger btn mx-1">
                -
              </button>
            </div>
            <div>
              ₹ {item.price.toFixed(2)} X {item.qty} = {" "}
              {(item.qty * item.price).toFixed(2)}
            </div>
          </div>
          
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="fw-bold">
              Net Total:{" "}
              <span className="badge rounded-pill bg-primary text-end">
                ₹ {total.toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
