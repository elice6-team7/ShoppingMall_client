import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavContainer, LinkStyle } from "./nav-styled";
import * as API from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await API.get("/categories");
        const category = response.data;
        setCategories(category);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <NavContainer>
        <ul>
          <li>
            <LinkStyle to="/product/all">전체 상품</LinkStyle>
          </li>
          {categories.map((category) => {
            if (!category[1]) {
              return (
                <li key={category[0]._id}>
                  <LinkStyle to={`/product/${category[0]._id}`}>
                    {category[0].title}
                  </LinkStyle>
                </li>
              );
            }
          })}
        </ul>
      </NavContainer>
    </>
  );
};

export default Nav;
