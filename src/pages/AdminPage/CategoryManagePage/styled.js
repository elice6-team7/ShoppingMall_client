import styled from "styled-components"; 

export const CategoryWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);
  padding: 50px 100px;
  box-sizing: border-box;

  p {
    padding-bottom: 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid #000;
    font-size: 26px;
    text-align: center;
    background-color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    
    label:first-of-type {
      display: block;
      margin-bottom: 10px;
      font-size: 20px;
    }

    div:first-of-type {
      margin-bottom: 20px;
      input {
        width: 90%;
        box-sizing: border-box;
      }
    }

    li:not(:last-of-type) {
      margin-bottom: 5px;
    }

    input {
      padding: 0 10px;
      width: 84%;
      box-sizing: border-box;
    }

    button {
      margin-left: 1%;
      min-width: 5%;
      font-size: 14px;
      color: #fff;
      background-color: black;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.2s;
    }

    input, button {
      height: 35px;
    }

    button:hover {
      opacity: 0.7;
    }

    button:last-of-type {
      color: #000;
      background-color: #fff;
    }

    button:last-of-type:hover {
      background-color: #000;
      color: #fff;
      opacity: 1;
    }
  }
`;