import React from "react";
import { MainWrapper } from "./styled";

const Main = () => {
  return (
    <>
      <MainWrapper>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/main.jpg"} alt="MainImg" />
        </div>
      </MainWrapper>
    </>
  );
};

export default Main;
