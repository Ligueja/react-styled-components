import styled from "styled-components";

interface FigurePropos {
  $imageUrl: string;
}

export const Figure = styled.figure<FigurePropos>`
  background-image: ${(props) => `url(${props.$imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
`;
