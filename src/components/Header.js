import { faCartShopping, faUnlockKeyhole, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderNav,
  LinkStyle,
  LogoBox
} from "./header-styled";

import { useUserDispatch, useUserState } from "../context/UserContext";
import { getIsAdmin } from "../utils/utils";

const Header = () => {
  const { isLoggedIn } = useUserState();
  const dispatch = useUserDispatch();
  const isAdmin = getIsAdmin();
  // console.log(isAdmin);
  

  const logoutSubmit = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
      console.log("로그아웃 완료");
    }
  };

  return (
    <>
      <HeaderContainer>
        <LogoBox>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/img/logo7.png"} alt="LOGO" />
          </Link>
        </LogoBox>
        <HeaderNav>
          <ul>
            {isAdmin && (
              <li>
                <LinkStyle to="/admin">
                  <FontAwesomeIcon icon={faUnlockKeyhole} />
                </LinkStyle>
              </li>
            )}
            {isLoggedIn && isLoggedIn ? (
              <li onClick={logoutSubmit}>
                <LinkStyle to="/">LOGOUT</LinkStyle>
              </li>
            ) : (
              <li>
                <LinkStyle to="/login">LOGIN</LinkStyle>
              </li>
            )}

            <li>
              <LinkStyle to="/myaccount">
                <FontAwesomeIcon icon={faUser} />
              </LinkStyle>
            </li>
            <li>
              <LinkStyle to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </LinkStyle>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default Header;
