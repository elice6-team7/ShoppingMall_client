import React, { useEffect, useState } from "react";
import { OrderedItemListWrapper } from "./orderhistory-styled";
import UserOrderedItem from "./OrderedItem";
import { Link } from "react-router-dom";
import * as API from "../../../utils/api";

import { getUserId } from "../../../utils/utils";

const UserOrderedItemList = () => {
  const [orderedInfoList, setOrderedInfoList] = useState([]);

  const getOrderedInfoListAPI = async (userId) => {
    // const userId = getUserId();

    try {
      const { data } = await API.get(`/order/${userId}`);
      console.log("order list api success", data);
      setOrderedInfoList([...data]);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    const userId = getUserId();
    if (userId) {
      getOrderedInfoListAPI(userId);
    }
    console.log("ordered list", orderedInfoList);
    console.log("user id", userId);
  }, []);

  return (
    <OrderedItemListWrapper>
      {orderedInfoList &&
        orderedInfoList.map((item, index) => (
          <UserOrderedItem key={index} orderId={item._id} {...item} />
        ))}
      {orderedInfoList.length === 0 && <div>주문 내역이 없습니다.</div>}
    </OrderedItemListWrapper>
  );
};

export default UserOrderedItemList;
