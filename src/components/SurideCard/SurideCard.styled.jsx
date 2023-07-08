import styled from "styled-components";

const SCSurideCard = styled.div`
  background: transparent;
  perspective: 1000px;

  .content {
    position: relative;
    width: 200px;
    height: 300px;
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
    }
  }

  &.flipped {
    .content {
      transform: rotateY(180deg);
    }
  }
`;

export default SCSurideCard;
