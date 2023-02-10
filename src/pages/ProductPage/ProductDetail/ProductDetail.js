import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as API from "../../../utils/api";
import Counter from "./Counter";
import {
  Button,
  Button2,
  ProductDetailWrapper,
  ProductImg,
  ProductInfo,
} from "./productDetail-styled";
import RadioBox from "./RadioBox";

const Product = ({ count, setCount }) => {
  const [carts, setCarts] = useState([]);
  const { id } = useParams();

  const [object, setObject] = useState(1);
  const [product, setProduct] = useState({});

  const getProductAPI = async () => {
    try {
      API.get("/products/").then((data) => {
        setProduct(data.data.find((product) => product._id == id));
      });
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    getProductAPI();
  }, [id]);

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("cart")));
  }, []);

  // 제품 수량 카운팅
  const handleQuantity = (quantity) => {
    if (quantity === "plus") {
      setCount(() => {
        setObject(object + 1);
      });
    } else {
      if (object === 1) {
        return;
      }
      setCount(() => {
        setObject(object - 1);
      });
    }
  };

  // 장바구니 중복 체크

  const setQuantity = (id, quantity) => {
    const found = carts.filter((el) => el._id === id)[0];
    const idx = carts.indexOf(found);
    const cartItem = {
      _id: product._id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      manufacturer: product.manufacturer,
      quantity: quantity,
      size: options.filter((size) => size.checked === true)[0]
      .value,
    };

    // 값만 수정된 새로운 배열 리턴
    setCarts([...carts.slice(0, idx), cartItem, ...carts.slice(idx + 1)]);
    localStorage.setItem(
      "cart",
      JSON.stringify([
        ...carts.slice(0, idx),
        cartItem,
        ...carts.slice(idx + 1),
      ])
    );
  };

  // cart에 추가
  const handleCart = () => {
    const cartItem = {
      _id: product._id,
      imageUrl: product.imageUrl,
      title: product.title,
      price: product.price,
      manufacturer: product.manufacturer,
      quantity: object,
      size: options.filter((size) => size.checked === true)[0]
      .value,
    };

    if(carts === null) { 
      // console.log("값이 없음");
      setCarts([cartItem]);
      localStorage.setItem("cart", JSON.stringify([cartItem]));
      return;
    }

    // found가 있으면 중복된 물건
    const found = carts.find((el) => el._id === cartItem._id);

    // found.quantity+ count는 기존 db의 수량과 장바구니 클릭을 통해 추가된 수량
    if (found) setQuantity(cartItem._id, found.quantity + object);
    else if (!found) {
      setCarts([...carts, cartItem]);
      localStorage.setItem("cart", JSON.stringify([...carts, cartItem]));
    }
    //기존 카트는 유지하고 카트 item 추가
  };

  const [options, setOptions] = useState([
    {
      label: "small",
      value: "sizeS",
      BackgroundColor: "red",
      checked: false,
    },
    {
      label: "medium",
      value: "sizeM",
      BackgroundColor: "red",
      checked: false,
    },
    {
      label: "large",
      value: "sizeL",
      BackgroundColor: "red",
      checked: false,
    },
    {
      label: "xlarge",
      value: "sizeXL",
      BackgroundColor: "red",
      checked: false,
    },
    {
      label: "xxlarge",
      value: "size2XL",
      BackgroundColor: "red",
      checked: false,
    },
  ]);

  const handleRadioChange = (idx) => {
    setOptions((current) =>
      current.map((item, index) =>
        index === idx ? { ...item, checked: true } : { ...item, checked: false }
      )
    );
  };
  const navigate = useNavigate();
  const userCheck = () => {
    console.log(
      count,
      product.price,
      product.title,
      product._id,
      options.filter((size) => size.checked === true)
    );
    if (options.filter((size) => size.checked === true).length === 0)
      alert("사이즈를 선택해주세요");
    try {
      const token = localStorage.getItem("token");
      if (token) {
        // localStorage.setItem("cart", JSON.stringify({
        //   count: object,
        //   total: product.price * object,
        //   product: product.title,
        //   productId: product._id,
        //   productSize: options.filter((size) => size.checked === true)[0]
        //     .value,
        // }))
        navigate("/order", {
          state: {
            count: object,
            total: product.price * object,
            product: product.title,
            productId: product._id,
            productSize: options.filter((size) => size.checked === true)[0]
              .value,
          },
        });
      } else {
        alert("회원 전용 서비스입니다.");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    product && (
      <>
        <ProductDetailWrapper>
          <div>
            <ProductImg>
              <img src={product.imageUrl} alt="image" />
            </ProductImg>
            <ProductInfo>
              <div>
                <p>{product.title}</p>
                <span>₩{Number(product.price).toLocaleString("ko-KR")}</span>
              </div>
              <div>
                <Counter
                  handleQuantity={handleQuantity}
                  object={object}
                  product={product}
                />
                <RadioBox options={options} radioProps={handleRadioChange} />
                <Button
                  onClick={() => {
                    if(options.filter((size) => size.checked === true).length === 0) alert("사이즈를 선택해주세요.");
                    else {
                      handleCart();
                      alert("상품이 장바구니에 담겼습니다.");
                    }
                  }}
                >
                  쇼핑백 담기
                </Button>
                <Button2 onClick={userCheck}>구매하기</Button2>
              </div>

              <div>
                <p>
                  오후 2시 이전 주문 시 오늘출발 / 오늘도착
                  <br />
                  공식 홈페이지 전용 서비스입니다.
                  <br />
                  추가 배송비는 발생하지 않습니다.
                </p>
              </div>
            </ProductInfo>
          </div>
        </ProductDetailWrapper>
      </>
    )
  );
};

export default Product;
