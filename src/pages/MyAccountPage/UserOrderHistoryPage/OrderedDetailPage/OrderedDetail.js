import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "../../../../components/common-styled";
import { TitleWrapper } from "../orderhistory-styled";
import {
  OrderedDetailWrapper,
  UserOrderInfo,
  InfoTitle,
  InfoDetail,
} from "./ordereddetail-styled";
import { ROUTE } from "../../../../routes/route";
import { phoneNumberFormat } from "../../../../utils/utils";
import * as API from "../../../../utils/api";
import OrderedDetailItem from "./OrderedDetailItem";

const OrderedDetail = () => {
  const [products, setProducts] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate(ROUTE.LOGIN.link);
    }
  }, []);

  useEffect(() => {
    const { item, productInfo } = location.state;
    setOrderInfo(item);
    setProducts([...productInfo]);
  }, [location.state]);

  /** 주문 취소 API */
  const cancelOrderAPI = async (orderId) => {
    try {
      await API.delete(`/order/${orderId}`);
      console.log("주문 취소", orderInfo?.orderId);
      navigate("/myaccount/order", { replace: true });
    } catch (err) {
      console.log("Err", err);
    }
  };

  /** 주문 취소 */
  const cancelOrder = () => {
    if (confirm("주문을 취소하시겠습니까?")) {
      orderInfo && cancelOrderAPI(orderInfo.orderId);
    }
  };

  return (
    <LayoutWrapper>
      <OrderedDetailWrapper>
        <TitleWrapper>
          <h1>ORDER INFORMATION</h1>
        </TitleWrapper>
        {orderInfo &&
          products &&
          products.map((productItem, index) => {
            return (
              <OrderedDetailItem
                key={index}
                orderInfo={orderInfo}
                productItem={productItem}
              />
            );
          })}

        <UserOrderInfo>
          <InfoTitle>
            <h3>배송지 정보</h3>
            {orderInfo?.status === "결제 완료" ||
            orderInfo?.status === "배송 준비" ? (
              <>
                <Link to={`/order`} state={{ orderInfo, products }}>
                  <button>배송지 변경</button>
                </Link>
                <button onClick={cancelOrder}>주문 취소</button>
              </>
            ) : null}
          </InfoTitle>
          {orderInfo && (
            <InfoDetail>
              <ul>
                <li>
                  <strong>수령인</strong>
                  <span>{orderInfo?.consignee}</span>
                </li>
                <li>
                  <strong>전화번호</strong>
                  <span>
                    {orderInfo?.phoneNumber &&
                      phoneNumberFormat(orderInfo?.phoneNumber)}
                  </span>
                </li>
                <li>
                  <strong>주소</strong>
                  <span>
                    ({orderInfo?.zipcode}) {orderInfo?.address1}{" "}
                    {orderInfo?.address2}
                  </span>
                </li>
              </ul>
            </InfoDetail>
          )}
        </UserOrderInfo>
      </OrderedDetailWrapper>
    </LayoutWrapper>
  );
};

export default OrderedDetail;
