import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinkStyle, ProductWrapper } from "./styled";
import queryString from "query-string";
import * as API from "../../../utils/api";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const init = () => {
      // this.props.location.search  <- class형 컴포넌트

      let qs = queryString.parse(window.location.search);
      // console.log(qs, "qs");

      if (Object.keys(qs).length === 0) return; // or defense code
    };
    init();
  }, []);

  const imgError = (e) =>
    (e.target.src =
      "https://kuku-keke.com/wp-content/uploads/2020/04/2491_6.png");

  useEffect(() => {
    (async () => {
      try {
        if (category === "all") {
          const response = await API.get("/products");
          const products = response.data;
          setProductList(products);
        } else {
          const response = await API.get(`/products/category/${category}`);
          const products = response.data;
          setProductList(products);
        }
      } catch (err) {
        console.log(`ERROR: ${err}`);
      }
    })();
  }, [category]);

  return (
    <>
      <ProductWrapper>
        <ul>
          {productList &&
            productList.map((item) => {
              return (
                <li key={item._id}>
                  <LinkStyle to={`/product/detail/${item._id}`}>
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={`Product ${item.title}`}
                        onError={imgError}
                      />
                    )}
                    <div>
                      <p>{item.title}</p>
                      <span>
                        ₩ {Number(item.price).toLocaleString("ko-KR")}
                      </span>
                    </div>
                  </LinkStyle>
                </li>
              );
            })}
        </ul>
      </ProductWrapper>
    </>
  );
};

export default Product;
