import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: relative;
  top: 60px;
  left: 280px;
  width: calc(100% - 300px);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: relative;

  label {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 48px;
    padding-left: 10px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  width: 100%;
  height: 48px;
  margin-top: 40px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
