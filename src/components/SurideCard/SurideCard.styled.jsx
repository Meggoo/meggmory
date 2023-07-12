import styled from "styled-components";

const SCSurideCard = styled.div`
  background: transparent;
  perspective: 1000px;

  .content {
    position: relative;
    width: var(--image-width);
    height: var(--image-height);
    transition: transform 0.33s;
    transform-style: preserve-3d;

    .front,
    .back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      display: grid;
      place-items: center;
    }
    .back {
      background: #e36161;
      transform: rotateY(180deg);
      border-radius: 10px;
      z-index: 2;
    }
  }

  &.flipped {
    .content {
      transform: rotateY(180deg);
    }
  }
`;

export default SCSurideCard;
