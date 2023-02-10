import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  width: 300px;
  height: 100%;
  padding: 110px 40px;
  box-sizing: border-box;

  > ul > li:not(:last-of-type) {
    margin-bottom: 20px;
  }

  ul li:not(:first-child) {
    margin-left: 5px;
  }

  span {
    cursor: pointer;
  }
`;

export const LinkStyle = styled(Link)`
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  color: #777;
  text-decoration: none;

  &:hover {
    color: #000;
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0px;
    border-bottom: 1px solid #000;
    transition: all 0.3s;
    content: "";
  }

  &:hover::after {
    width: 100%;
  }
`;
