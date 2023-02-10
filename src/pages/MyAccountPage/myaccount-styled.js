import styled from "styled-components";

export const MyAccountWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.urlPath});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccountNavWrapper = styled.div`
  width: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  h1 {
    padding-top: 40px;
    font-size: 32px;
    margin-bottom: 100px;
  }
`;

export const GotoLink = styled.div`
  font-size: 24px;
  margin-bottom: 40px;
  a {
    text-decoration: none;
    transition: all 0.3s;
    font-weight: bold;
  }

  &:hover a {
    color: #72b048;
  }
`;
export const GotoMyDetails = styled(GotoLink)``;
export const GotoOrderHistory = styled(GotoLink)``;
