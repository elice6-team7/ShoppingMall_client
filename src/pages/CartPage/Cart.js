import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartWrapper, CartList, PayInfo } from "./styled";

import CartView from "./CartView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Cart = ({ count, setCount }) => {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [cartList, setCartList] = useState([]);
  const navigator = useNavigate();

  // 로컬스토리지의 cart 불러옴
  useEffect(() => {
    setCartList(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // 장바구니 수량 버튼에 적용할 함수
  const setQuantity = (type, _id, quantity) => { 
    if (type === "plus") {
      const found = cartList.filter((item) => item._id === _id)[0];
      const size = found.size;
      const idx = cartList.indexOf(found);
      const cartItem = {
        _id: found._id,
        imageUrl: found.imageUrl,
        title: found.title,
        price: found.price,
        manufacturer: found.manufacturer,
        quantity: quantity,
        size: size,
      };

      setCartList([
        ...cartList.slice(0, idx),
        cartItem,
        ...cartList.slice(idx + 1),
      ]);
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...cartList.slice(0, idx),
          cartItem,
          ...cartList.slice(idx + 1),
        ])
      );
    } else {
      if (quantity === 0) return;

      // 장바구니에 있는 상품
      const found = cartList.filter((item) => item._id === _id)[0];
      const size = found.size;
      cartList.length;
      const idx = cartList.indexOf(found);
      const cartItem = {
        _id: found._id,
        imageUrl: found.imageUrl,
        title: found.title,
        price: found.price,
        manufacturer: found.manufacturer,
        quantity: quantity,
        size: size,
      };

      setCartList([
        ...cartList.slice(0, idx),
        cartItem,
        ...cartList.slice(idx + 1),
      ]);
      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...cartList.slice(0, idx),
          cartItem,
          ...cartList.slice(idx + 1),
        ])
      );
    }
  };

  // 총 가격
  const getTotalPrice = () => {
    return cartList.reduce((tot, el) => tot + el.price * el.quantity, 0);
  };
  // 상품 수
  const getTotalCount = () => {
    return cartList.reduce((tot, el) => tot + el.quantity, 0);
  };

  useEffect(() => {
    cartList && setPrice(getTotalPrice());
    cartList && setCount(getTotalCount());
    cartList && setTotal(getTotalPrice());
  }, [cartList]);

  // 장바구니 부분삭제
  const handleRemove = (index) => {
    setCartList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newList));
      return newList;
    });
  };

  // 장바구니 전체삭제
  const handleRemoveAll = (index) => {
    setCartList((current) => {
      const newList = [];

      localStorage.setItem("cart", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <>
      <CartWrapper>
        <div>
          <p>
            <span>장바구니</span> &#62; 주문결제 &#62; 주문완료{" "}
          </p>
        </div>
        <div>
          <CartList>
            <CartView
              setQuantity={setQuantity}
              onRemove={handleRemove}
              cartList={cartList}
              setCartList={setCartList}
            />
          </CartList>
          <PayInfo>
            <div>
              <p>결제정보</p>
              <ul>
                <li>총 상품개수 {Number(count).toLocaleString("ko-KR")} 개 </li>
              </ul>
              <p>
                총 결제금액 {Number(total + delivery).toLocaleString("ko-KR")}{" "}
                원
              </p>
            </div>

            <button
              className="btn btn-outline-primary mb-3"
              onClick={handleRemoveAll}
            >
              쇼핑백 비우기
            </button>
              {/* <Link
                to="/order"
                state= {{
                  count: '',
                  total: '',
                  product: '',
                  productId: '',
                  productSize: '',
                }}
              >
                주문하기
              </Link> */}
              <button onClick={() => {
                const token = localStorage.getItem("token");
                try {
                  if(token) {
                    navigator('/order', {
                      state: {
                        count: 0,
                        total: 0,
                        product: '',
                        productId: '',
                        productSize: '',
                      }
                    })
                  }
                } catch(e) {
                  alert("회원 전용 서비스입니다.");
                  navigate("/login");
                }
              }}>주문하기</button>
          </PayInfo>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
