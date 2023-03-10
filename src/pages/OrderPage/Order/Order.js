import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderInfo, OrderWrapper, PayInfo } from "./styled";
import * as API from "../../../utils/api";
import { getUserId } from "../../../utils/utils";
import { ROUTE } from "../../../routes/route";
// import { async } from "q";

const Order = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const { count, total, product, productId, productSize } = location.state;
  const { orderInfo, products } = location.state;

  const [editOrderInfo, setEditOrderInfo] = useState(null);
  const [editProducts, setEditProducts] = useState(null);
  const [consignee, setConsignee] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const inputName = useRef();
  const inputPhone = useRef();
  const inputAddress = useRef();
  const inputAddress2 = useRef();
  const inputZipcode = useRef();

  const data = JSON.parse(localStorage.getItem("cart"));

  // console.log(count, total, product, productId, productSize);

  const orderHandler = async () => {
    try {
      const userId = getUserId();
      const data = {
        userId,
        totalPrice: total,
        consignee: inputName.current.value,
        address1: inputAddress.current.value,
        address2: inputAddress2.current.value,
        zipcode: inputZipcode.current.value,
        phoneNumber: inputPhone.current.value,
      };

      const response = await API.post("/order", data);
      const orderData = response.data;
      
      if(productId === '') {
        const data = JSON.parse(localStorage.getItem("cart"));
        data.map(async (item) => {
          const odData = {
            orderId: orderData._id,
            productId: item._id,
            productQuantity: item.quantity,
            productSize: item.size,
            _id: userId,
          };
          console.log(odData);
          localStorage.removeItem("cart");
          await API.post("/order/product", odData);
        })
      } else {
        const odData = {
          orderId: orderData._id,
          productId: productId,
          productQuantity: count,
          productSize: productSize,
          _id: userId,
        };
        await API.post("/order/product", odData);
      }

      

      // console.log(odData);

      navigator("/order/complete");
    } catch (err) {
      console.log(localStorage.getItem("cart"));
      console.log(total, product, productId, productSize);
      console.log(err);
    }
  };

  /** ????????? ?????? ??? ????????? ????????? */
  useEffect(() => {
    setEditOrderInfo(orderInfo);
    setEditProducts(products);

    console.log("ordderrr", editOrderInfo);
    console.log("products", editProducts);
  }, [location.state]);

  /** ????????? ?????? ??? ????????? ????????? ?????? */
  useEffect(() => {
    setConsignee(
      editOrderInfo?.consignee ? editOrderInfo.consignee : consignee
    );
    setAddress1(editOrderInfo?.address1 ? editOrderInfo.address1 : address1);
    setAddress2(editOrderInfo?.address2 ? editOrderInfo.address2 : address2);
    setZipcode(editOrderInfo?.zipcode ? editOrderInfo.zipcode : zipcode);
    setPhoneNumber(
      editOrderInfo?.phoneNumber ? editOrderInfo.phoneNumber : phoneNumber
    );
    setProductPrice(
      editOrderInfo?.totalPrice
        ? editOrderInfo.totalPrice
        : total
        ? total
        : productPrice
    );
  }, [editOrderInfo, editProducts]);

  /** ????????? ?????? API */
  const editOrderAPI = async () => {
    try {
      const userId = getUserId();

      await API.patch(`/order/${editOrderInfo.orderId}`, {
        userId,
        status: editOrderInfo.status,
        consignee,
        address1,
        address2,
        zipcode,
        phoneNumber,
      });

      alert("????????? ????????? ?????????????????????.");
      navigator(ROUTE.USERORDERHISTORY.link);
    } catch (err) {
      console.log("Err", err);
    }
  };

  /** ????????? ?????? ????????? */
  const editOrderHandler = () => {
    editOrderAPI();
  };
  
  const [totals, setTotals] = useState(0);
  useEffect(() => {
    if(product === '') {
      const price = data.map(item => item.price);
      price.forEach((item) => {
        console.log(item);
        setTotals(current => current = current + item)
      });
    }
  }, [])

  return (
    <>
      <OrderWrapper>
        <div>
          <p>
            ???????????? &#62; <span>????????????</span> &#62; ????????????{" "}
          </p>
        </div>
        <div>
          <OrderInfo>
            <p>???????????????</p>
            <form>
              <div>
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  placeholder="??????"
                  ref={inputName}
                  value={consignee}
                  onChange={(e) => setConsignee(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone">PHONE</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="????????? ??????"
                  maxLength="11"
                  ref={inputPhone}
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
              <div>
                <label htmlFor="address">ADDRESS</label>
                <input
                  type="text"
                  id="address"
                  placeholder="??????"
                  ref={inputAddress}
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="address2">ADDRESS2</label>
                <input
                  type="text"
                  id="address2"
                  placeholder="????????????"
                  ref={inputAddress2}
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="zipcode">ZIPCODE</label>
                <input
                  type="text"
                  id="zipcode"
                  placeholder="????????????"
                  ref={inputZipcode}
                  value={zipcode}
                  onChange={(e) =>
                    setZipcode(e.target.value.replace(/[^0-9]/g, ""))
                  }
                />
              </div>
            </form>
          </OrderInfo>
          <PayInfo>
            <div>
              <p>????????????</p>
              <ul>
                <li>
                  ?????? ??????
                  { product === '' && data.map((item, idx) => 
                  (<span key={idx}>{item.title}</span>))}
                  {product && <span> {product}</span>}
                  {editProducts &&
                    editProducts.map((item, index) => {
                      return <span key={index}>{item.productId.title}</span>;
                    })}
                </li>
              </ul>

              <p>
                ??? ???????????? 
                <span>
                  {product !== '' && Number(productPrice).toLocaleString("ko-KR")}
                  {product === '' && Number(totals).toLocaleString("ko-KR")}
                  ???
                </span>
              </p>

              {/* <p>
                ??? ???????????? <span>{total}???</span>
              </p> */}
            </div>
            {orderInfo && products ? (
              <button onClick={editOrderHandler}>????????? ?????? ??????</button>
            ) : (
              <button onClick={orderHandler}>?????? ??????</button>
            )}
          </PayInfo>
        </div>
      </OrderWrapper>
    </>
  );
};

export default Order;
