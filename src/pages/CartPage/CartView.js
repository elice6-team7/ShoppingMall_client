import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const cartList = ({ cartList, onRemove, setQuantity }) => {
  return (
    <div>
      <ol>
        {cartList &&
          cartList.map((item, index) => {
            return (
              <li key={index} className={item.isCompleted ? "complete" : ""}>
                <img src={item.imageUrl} alt="Product" />
                <div>
                  <p>{item.title}</p>
                  <p>₩{item.price}</p>
                  <p>{item.manufacturer}</p>
                </div>
                <span>수량:{item.quantity}</span>
                <button
                  onClick={() => {
                    setQuantity("plus", item._id, item.quantity + 1);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    setQuantity("minus", item._id, item.quantity - 1);
                  }}
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onRemove(index);
                  }}
                >
                  {" "}
                  삭제
                </button>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default cartList;
