import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { OrderedDetailItemWrapper } from "./ordereddetail-styled";
import {
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
  OrderInfo,
  ItemInfo,
  OrderStatus,
} from "../ordereditem-styled";
import * as API from "../../../../utils/api";
import { ROUTE } from "../../../../routes/route";

const OrderedDetailItem = ({ orderInfo, productItem }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("orderInfo", orderInfo);
    console.log("productItem", productItem);
  }, []);

  return (
    <OrderedDetailItemWrapper>
      <ItemDetail>
        <OrderInfo>
          <span>{orderInfo?.createdAt?.slice(0, 10)} </span>
          {/* <span>({orderInfo?.orderNumber})</span> */}
        </OrderInfo>
        <ItemWrapper>
          <Link to={`/myaccount/order`}>
            <ItemImageWrapeer>
              {productItem?.productId?.imageUrl && (
                <img
                  src={productItem?.productId?.imageUrl}
                  alt={productItem?.productId?.title}
                />
              )}
            </ItemImageWrapeer>
          </Link>
          <ItemInfoWrapper>
            <ItemInfo>
              <h3>{productItem?.productId?.title}</h3>
              <div>
                <p>
                  KRW{" "}
                  {productItem?.productId?.price &&
                    Number(productItem?.productId?.price).toLocaleString(
                      "ko-KR"
                    )}
                </p>
                <p>QTY : {productItem?.productQuantity}</p>
              </div>
            </ItemInfo>
            <OrderStatus>
              <p>{orderInfo?.status}</p>
            </OrderStatus>
          </ItemInfoWrapper>
        </ItemWrapper>
      </ItemDetail>
    </OrderedDetailItemWrapper>
  );
};

export default OrderedDetailItem;
