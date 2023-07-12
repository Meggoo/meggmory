import styled from "styled-components";

const SCApp = styled.div`
  &.light {
    --background: #e6c6c6;
    --play-background: #a58cb5;
    --play-background-hover: #9678a5;
    --glassified-background: #d41f4099;
    --text-color: #e4c0c0;
  }

  &.dark {
    --background: #2b020b;
    --play-background: #5c1d52;
    --play-background-hover: #47164b;
    --glassified-background: #7d2b3953;
    --text-color: #f7f0f0;
  }

  --play-color: #e9d1d1;
  --pink-border-color: #b981af;
  --accent-background: #eed6da;

  --image-width: 350px;
  --image-height: 300px;

  .h-l,
  .h-m,
  .h-s,
  .b-l,
  .b-m {
    font-family: v-chan;
  }

  .h-l {
    font-size: 50px;

    @media screen and (max-width: 500px) {
      font-size: 37px;
    }
  }

  .h-m {
    font-size: 40px;

    @media screen and (max-width: 500px) {
      font-size: 32px;
    }
  }

  .h-s {
    font-size: 30px;
  }

  .b-l {
    font-size: 20px;
  }

  .b-m {
    font-size: 16px;
  }

  .control-button {
    background: #4e3f3f55;
    color: #f5ecf9;
    border: none;
    border-radius: 5px;
    width: 30px;
    height: 30px;

    svg {
      pointer-events: none;
      width: 20px;
      height: 20px;
    }
  }

  .underlined {
    position: relative;
    width: fit-content;
    cursor: pointer;

    &::after {
      background: var(--accent-background);
      content: "";
      position: absolute;
      top: 110%;
      left: 50%;
      transform: translate(-50%, 0) scale(0, 1);
      transition: transform 0.33s;
      width: 100%;
      height: 2px;
    }

    @media (hover: hover) {
      &:hover::after {
        transform: translate(-50%, 0) scale(1, 1);
      }
    }
  }

  .bordered {
    outline: 3px solid var(--pink-border-color);
    border-radius: 10px;
  }

  .glassified {
    background: var(--glassified-background);
    backdrop-filter: blur(3px);
  }

  .play-button {
    background: var(--play-background);
    color: var(--play-color);
    padding: 20px 50px;
    border-radius: 10px;
    border: none;
    transition: background-color 0.33s;
    width: max-content;

    @media (hover: hover) {
      &:hover {
        background: var(--play-background-hover);
      }
    }

    @media screen and (max-width: 500px) {
      padding: 10px 20px;
    }
  }

  @media screen and (max-width: 500px) {
    --image-width: 130px;
    --image-height: 170px;
  }
`;

export default SCApp;
