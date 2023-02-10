import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderWrapper, LinkStyle } from "./styled";

const OrderComplete = () => {
  const time = new Date().getTime();
  const date = new Date(time);
  const timestemp = '' + date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds();
  console.log(date)
  return (
    <>
      <OrderWrapper>
        <div>
          <span>{timestemp}</span>
          <div>
            <span><FontAwesomeIcon icon={faBagShopping} /></span>
          </div>
          <div>
            <p>주문이 완료되었습니다.</p>
            <p>감사합니다.</p>
          </div>
          <LinkStyle to="/product/all">쇼핑 계속하기</LinkStyle>
        </div>
      </OrderWrapper>
    </>
  );
};

export default OrderComplete;
