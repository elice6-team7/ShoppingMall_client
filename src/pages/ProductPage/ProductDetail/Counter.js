import React, { useState } from "react";
import { CounterWrapper, Button } from "./counter-styled";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ handleQuantity, object, product }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <CounterWrapper>
      <Button
        onClick={() => {
          handleQuantity("minus");
          if (object <= 2) {
            setDisabled(true);
          }
        }}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span>{object}</span>
      <Button
        onClick={() => {
          handleQuantity("plus");
          if (object >= 1) {
            setDisabled(false);
          }
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </CounterWrapper>
  );
};

export default Counter;
