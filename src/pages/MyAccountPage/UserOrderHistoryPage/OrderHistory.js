import React, { useEffect } from "react";
import { LayoutWrapper } from "../../../components/common-styled";
import { OrderHistoryWrapper, TitleWrapper } from "./orderhistory-styled";
import UserOrderedItemList from "./OrderedItemList";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../routes/route";

const UserOrderHistory = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate(ROUTE.LOGIN.link);
    }
  }, []);

  return (
    <LayoutWrapper>
      <OrderHistoryWrapper>
        <TitleWrapper>
          <h1>ORDER HISTORY</h1>
        </TitleWrapper>
        <UserOrderedItemList />
      </OrderHistoryWrapper>
    </LayoutWrapper>
  );
};

export default UserOrderHistory;
