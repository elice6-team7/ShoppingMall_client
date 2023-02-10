import { Link } from "react-router-dom";
import styled from "styled-components";
export const OrderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-basis: 550px;
    position: relative;
    padding: 50px;
    height: 300px;
    background-color: #fff;
    box-shadow: 0px 15px 30px 1px rgba(0, 0, 0, .2);

    p {
      margin-bottom: 10px;
      font-size: 20px;
    }
    div:first-of-type  {
      margin-right: 20px;
      span {
        display: flex;
        align-items: center;
        font-size: 50px;
        margin-bottom: 20px;
      }
    }
    > span {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
  
`

export const LinkStyle = styled(Link)`
  display: block;
  margin: 0px 100px;
  border: 1px solid #f2f2f2;
  color: #000;
  width: 240px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, .2);
  transition: all 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }
`