import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: #fff; */
`;

export const LogoBox = styled.div`
  img {
    height: 20px;
  }
`;

export const HeaderNav = styled.div`
  ul {
    display: flex;
    align-items: center;
    height: 100%;

    li:not(:first-of-type) {
      margin-left: 25px;
      font-size: 20px;
    }
  }
`;

export const LinkStyle = styled(Link)`
  /* color: #777; */
  text-decoration: none;
  transition: all 0.3s;

  color: #000 !important;

  &:hover {
    color: #777 !important;
  }
`;
