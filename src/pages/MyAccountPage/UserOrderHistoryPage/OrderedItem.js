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
} from "./ordereditem-styled";

import * as API from "../../../utils/api";

const UserOrderedItem = (item) => {
  const [productInfo, setProductInfo] = useState([]);

  const getOrderInfoAPI = async (item) => {
    try {
      const { data } = await API.get(`/order/product/${item.orderId}`);
      setProductInfo([...data]);
    } catch (err) {
      console.log("ErrProduct", err?.response?.data);
    }
  };

  useState(() => {
    if (item) {
      getOrderInfoAPI(item);
    }
  }, [item]);

  console.log("infooooooo", item);

  return (
    <OrderedItemWrapper>
      {item && productInfo.length > 0 && (
        <ItemDetail>
          <OrderInfo>
            <span>{item?.createdAt?.slice(0, 10)} </span>
            {/* <span>({item?.orderNumber})</span> */}
          </OrderInfo>

          <ItemWrapper>
            <Link to={`/product/detail/${productInfo[0]?.productId?._id}`}>
              <ItemImageWrapeer>
                {productInfo[0]?.productId?.imageUrl && (
                  <img
                    src={productInfo[0]?.productId?.imageUrl}
                    alt={productInfo[0]?.productId?.title}
                  />
                )}
              </ItemImageWrapeer>
            </Link>
            <ItemInfoWrapper>
              <ItemInfo>
                <h3>{productInfo[0]?.productId?.title}</h3>
                <div>
                  <p>KRW {Number(item?.totalPrice).toLocaleString("ko-KR")}</p>
                  <p>QTY : {productInfo[0]?.productQuantity}</p>
                </div>
              </ItemInfo>
              <OrderStatus>
                <p>{item?.status}</p>
                <Link
                  to={`/myaccount/order/detail/${item?.orderId}`}
                  state={{ item, productInfo }}
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
