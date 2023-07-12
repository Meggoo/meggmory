import styled from "styled-components";

const SCCube = styled.div`
  --image-width: 150px;
  --image-height: 150px;
  --p-w: calc(var(--image-width) / 2);
  --n-w: calc(-1 * var(--p-w));
  width: var(--image-width);
  height: var(--image-height);
  position: relative;
  perspective: 500px;
  transform-style: preserve-3d;
  backface-visibility: visible;

  .faces {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: anime 3s linear infinite;

    .image {
      background: #9e55cf54;
      position: absolute;
      display: grid;
      place-items: center;
    }

    .front {
      transform: translateZ(var(--p-w));
    }

    .back {
      transform: translateZ(var(--n-w));
    }

    .left {
      transform: translateX(var(--n-w)) rotateY(90deg);
    }

    .right {
      transform: translateX(var(--p-w)) rotateY(90deg);
    }

    .top {
      transform: translateY(var(--n-w)) rotateX(90deg);
    }

    .bottom {
      transform: translateY(var(--p-w)) rotateX(90deg);
    }

    @keyframes anime {
      from {
        transform: rotateX(0) rotateY(45deg) rotateZ(0);
      }

      50% {
        transform: rotateX(180deg) rotateY(45deg) rotateZ(180deg);
      }

      to {
        transform: rotateX(360deg) rotateY(45deg) rotateZ(360deg);
      }
    }
  }
`;

export default SCCube;
