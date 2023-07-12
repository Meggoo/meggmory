import styled from "styled-components";

const SCImage = styled.div`
  width: var(--image-width);
  height: var(--image-height);
  display: grid;
  place-items: center;
  position: relative;
  pointer-events: none;

  .background {
    background-image: url("${(props) => props.$source}");
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    position: absolute;
    inset: 0;
  }

  img {
    max-width: var(--image-width);
    max-height: var(--image-height);
    position: relative;
  }
`;

export default SCImage;
