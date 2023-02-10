import styled from "styled-components";

export const OrderedDetailWrapper = styled.div`
  max-width: 1000px;
  padding-bottom: 80px;
`;

export const OrderedDetailListWrapper = styled.div``;

export const OrderedDetailItemWrapper = styled.div``;

export const UserOrderInfo = styled.div`
  margin-top: 40px;
`;

export const InfoTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding-bottom: 20px;
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  button {
    font-size: 15px;
    padding: 5px 11px;
    font-weight: bold;
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
    transition: 0.3s all;
    margin-right: 10px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const InfoDetail = styled.div`
  ul {
    margin-top: 20px;
  }
  li {
    margin-top: 14px;
  }
  strong {
    display: inline-block;
    width: 80px;
    font-weight: bold;
  }
`;
