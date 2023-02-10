import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  OrderedItemWrapper,
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
  OrderInfo,
  ItemInfo,
  OrderStatus,
} from "./userordereditem-styled";
import { timeFormat } from "../../../utils/utils";
import * as API from "../../../utils/api";

const UserOrderedItem = (item) => {
  const [orderedItem, setOrderedItem] = useState(item);

  const getOrderInfoAPI = async () => {
    try {
      const { data } = await API.get(`/order/product/${item._id}`);
      console.log(item);
      console.log("data", data);
      const { productId, productQuantity, productSize, orderId } = data[0];
      setOrderedItem({
        ...item,
        productId,
        productQuantity,
        productSize,
        orderId,
      });

      console.log("item", orderedItem);
    } catch (err) {
      console.log("Err", err?.response?.data);
    }
  };

  useState(() => {
    if (item) {
      getOrderInfoAPI();
    }
  }, [item]);

  const cancelOrder = () => {
    if (confirm("주문을 취소하시겠습니까?")) {
      console.log("주문 취소 완료");
    }
  };

  return (
    <OrderedItemWrapper>
      {orderedItem && (
        <ItemDetail>
          <OrderInfo>
            <span>{orderedItem?.date && timeFormat(orderedItem?.date)} </span>
            <span>({orderedItem?.orderNumber})</span>
          </OrderInfo>
          <ItemWrapper>
            <Link to={`/product/detail/${orderedItem?.productId}`}>
              <ItemImageWrapeer>
                {orderedItem?.image && (
                  <img src={orderedItem.image} alt={orderedItem.title} />
                )}
              </ItemImageWrapeer>
            </Link>
            <ItemInfoWrapper>
              <ItemInfo>
                <h3>{orderedItem?.title}</h3>
                <div>
                  <p>
                    KRW{" "}
                    {Number(orderedItem?.totalPrice).toLocaleString("ko-KR")}
                  </p>
                  {/* <p>QTY : {orderedItem?.productQuantity}</p> */}
                </div>
              </ItemInfo>
              <OrderStatus>
                <p>{orderedItem?.status}</p>
                <Link
                  to={`/myaccount/order/detail/${item._id}`}
                  state={orderedItem}
                >
                  <span>주문 상세 &gt; </span>
                </Link>
              </OrderStatus>
            </ItemInfoWrapper>
          </ItemWrapper>
        </ItemDetail>
      )}
    </OrderedItemWrapper>
  );
};

export default UserOrderedItem;