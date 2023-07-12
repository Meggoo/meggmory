import styled from "styled-components";

const SCPartyCard = styled.div`
  &.light {
    --party-background: #d6afe8;
  }

  &.dark {
    --party-background: #261b32;
  }

  padding: 10px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  .background {
    --w: max(100vw, 100vh);
    background: conic-gradient(
      hsl(0, 100%, 50%),
      hsl(45, 100%, 50%),
      hsl(90, 100%, 50%),
      hsl(135, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(225, 100%, 50%),
      hsl(270, 100%, 50%),
      hsl(315, 100%, 50%),
      hsl(360, 100%, 50%)
    );
    position: absolute;
    width: var(--w);
    height: var(--w);

    animation: rotate 1s linear infinite;
  }

  .container {
    background: var(--party-background);
    border-radius: 10px;
    position: relative;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default SCPartyCard;
