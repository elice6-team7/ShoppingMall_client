import styled from "styled-components";

export const OrderedItemWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OrderInfo = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  margin: 20px 0;

  a {
    text-decoration: none;
    transition: 0.3s all;
  }
  a:hover {
    opacity: 0.7;
  }
`;
export const ItemImageWrapeer = styled.div`
  width: 120px;
  height: 160px;
  background-color: #ddd;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ItemInfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    /* color: #666; */
    margin-top: 10px;
  }
`;

export const OrderStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    text-align: right;
  }

  a {
    text-decoration: none;
  }

  button {
    font-size: 15px;
    padding: 5px 11px;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      opacity: 0.5;
    }
  }

  span {
    font-size: 16px;
    padding: 5px 7px;
    color: #72b048;
    font-weight: bold;
  }
`;
