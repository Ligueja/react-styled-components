import styled from "styled-components";

export const Footter = styled.footer`
  height: 130px;
  display: flex;
  background-color: #f3eeee;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 50px;
`;

export const FooterLinks = styled.div`
  a {
    margin-right: 20px;
    color: #007acc;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    fill: #007acc;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

export const FooterText = styled.small`
  color: #808080;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
