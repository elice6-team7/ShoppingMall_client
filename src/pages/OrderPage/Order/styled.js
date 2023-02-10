import styled from "styled-components"; 

export const OrderWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);

  @media screen and (max-width:1279px) {
    > div:first-child {
      width: 90%;
    }

    > div > div {
      flex-basis: 100%;
    }
    > div > div:last-child {
      padding-right: 0;
      margin: 100px 2.5% 100px 0;
    }
  }

  @media screen and (max-width:777px){ 
    > div:first-child {
      width: 480px;
    }
    > div > div {
      flex-basis: 480px;
    }
  }

  & > div {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: center;
  }
  & > div:first-child {
    display: block;
    width: 90%;
  }

  > div:first-child {
    flex-basis: 90%;
    padding-bottom: 10px;
    margin-bottom: 50px;
    border-bottom: 1px solid #000;

    p {
      color: #a0a0a0;
      font-size: 23px;
      span {
        color: #000;
        font-size: 40px;
      }
    }
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  }

  > div > div {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
`;

export const OrderInfo = styled.div `
  margin: 0 2.5% 0 0;
  flex-basis: 50.5%;

  > p {
    padding: 0 0 10px 20px;
    font-size: 26px;
    border-bottom: 1px solid #000;
  }
  
  form {
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0 0;
    
    > div {
      width: 100%;
      label {
        display: inline-block;
        min-width: 110px;
        font-size: 22px;
        margin-right: 5%;
      }

      input {
        padding: 0 20px;
        min-width: 70%;
        height: 50px;
        box-sizing: border-box;
        font-size: 18px;
      }
    }
    
    > div:first-child {
      margin-top: 35px;
    }

    > div:not(:last-child) {
      margin-bottom: 35px;
    }
  }
`

export const PayInfo = styled.div `
  padding-right: 160px;
  flex-basis: 300px;
  
  p, li {
    padding: 0 0 10px 20px;
  }

  p:first-child {    
    font-size: 26px;
  }

  p:last-child {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    font-size: 20px;
  }

  ul {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 50px 0;
    min-width: 300px;

    li {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }

    li:first-child {
      flex-direction: column;
      span {
        margin-top: 10px;
      }
    }

    li:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  button {
    display: block;
    width: 100%;
    height: 70px;
    font-size: 20px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s;
  }
  button:hover {
    opacity: 0.8;
  }
`