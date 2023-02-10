import React, { useState } from "react";
import { RadioLabel, RadioWrapper } from "./radio-styled";

const Select = ({options, radioProps}) => {
  return (
    <>
      <RadioWrapper>
        <ul>
        {
          options.map((item, idx) => {
            return (
              <li key={idx}>
                <input type="radio" id={`type-${idx}`} checked={item.checked} onChange={() => radioProps(idx)} />
                <RadioLabel htmlFor={`type-${idx}`}>
                  <span>{item.label.toUpperCase()}</span>
                </RadioLabel>
              </li>
            )
          })
        }
        </ul>
      </RadioWrapper>
      
    </>
  )
}

export default Select;