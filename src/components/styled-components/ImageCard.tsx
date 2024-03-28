import styled from "styled-components";

interface ImageProps {
  $image: string;
}

export const ImageCard = styled.image<ImageProps>`
  background-image: ${(props) => `url(${props.$image})`};
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
