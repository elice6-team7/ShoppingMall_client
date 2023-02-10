import styled from "styled-components"; 
import {Link} from "react-router-dom";

export const ProductWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);

  @media screen and (max-width:1279px) {
    ul {
      padding: 0 0 0 0 !important;
    }
    li:not(:nth-child(3n + 1)) {
      padding-left: 0 !important;
    }
  }

  @media screen and (min-width:768px) and (max-width:1279px) { 
    li {
      flex-basis: 50% !important;
    }
    li:nth-child(2n + 1) {
      flex-basis: 48% !important;
    }
    li:nth-child(2n) {
      padding-left: 2% !important;
    }
  }

  @media all and (min-width:480px) and (max-width:767px) {
    li {
      flex-basis: 100% !important;
    }
    li:not(:nth-child(3n + 1)) {
      padding-left: 0 !important;
    }
    li:nth-child(2n + 1) {
      flex-basis: 100% !important;
    }
    li:nth-child(2n) {
      padding-left: 0% !important;
    }
  } 

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 100px 0 0;

    li {
      display: flex;
      flex-basis: 33%;
      flex-shrink: 0;
      margin-bottom: 80px;
      min-height: 600px;
      box-sizing: border-box;
    }
    li:not(:nth-child(3n + 1)) {
      padding-left: 2%;
    }
    li:nth-child(3n + 1) {
      flex-basis: 31%;
    }
    li img {
      display: block;
      width: 100%;
      max-height: 450px;
      transition: all 0.3s;
    }

    li:hover img {
      filter: opacity(0.7);
    }
    li:hover div {
      font-weight: bold;
    }
  }

  div {
    text-align: center;
    margin-top: 20px;
    color: #000 !important;
    p {
      margin-bottom: 5px;
      font-size: 20px;
    }
    span {
      font-size: 18px;
    }
  }
`;

export const LinkStyle = styled(Link)`
  color: #000;
  text-decoration: none;
`;