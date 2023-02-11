import styled from "styled-components";

export const CartWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: calc(100% - 300px);
  
  @media screen and (max-width:1279px) {
    min-width: 1279px;
  }


  & > div {
    display: flex;
    position: relative;
  }

  > div:first-child {
    width: 90%;
    padding-bottom: 10px;
    margin-bottom: 50px;
    border-bottom: 1px solid #000;

    p {
      color: #a0a0a0;
      font-size: 26px;
      span {
        color: #000;
        font-size: 40px;
      }
    }
  }
`;

export const CartList = styled.div`
  width: 62.5%;
  margin: 0 2.5% 0 0;
  ol {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 40px;
      height: 40px;
      margin-left: 10px;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      transition: all 0.2s;
      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
    li {
      display: flex;
      margin-bottom: 40px;

      img {
        width: 150px;
        margin: 0 20px;
      }

      > div {
        display: flex;
        flex-direction: column;
        min-width: 400px;
        padding: 10px 20px;
        box-sizing: border-box;
        p {
          margin-bottom: 20px;
          font-size: 17px;
        }

        > div {
          /* margin: auto auto 0 0;
          padding: 10px 0; */
          display: flex;
          align-items: flex-end;

          button {
            width: 40px;
            height: 40px;
            background-color: white;
            font-weight: 500;
            cursor: pointer;
            font-size: 22px;
          }

          span {
            display: inline-block;
            width: 40px;
            height: 40px;
            font-size: 22px;
            background-color: black;
            color: #fff;
            text-align: center;
            line-height: 40px;
          }
        }
      }
      

      > p {
        padding-top: 10px;
        text-decoration: underline;
      }
    }
  }
`

export const PayInfo = styled.div`
  position: sticky;
  top: 0px;
  right: 160px;
  padding-top: 100px;
  width: 35%;
  height: 500px;

  @media screen and (max-width:1600px) {
    position: relative;

  }
  
  a{
    text-decoration-line: none;
    color : #fff
  }

  p, li {
    padding: 0 0 10px 20px;
  }

  p:first-child {    
    font-size: 26px;
  }

  p:last-child {
    margin: 50px 0;
    font-size: 20px;
  }

  ul {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 50px 0;

    li {
      font-size: 20px;
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
    background-color: #fff;
    cursor: pointer;
  }
  button:last-child {
    margin-top: 20px;
    background-color: #000;
    color: #fff;
  }
`