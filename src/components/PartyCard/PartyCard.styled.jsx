import styled from "styled-components";

const SCPartyCard = styled.div`
  width: fit-content;
  padding: 3px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  .background {
    background: conic-gradient(
      hsl(0, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(120, 100%, 50%),
      hsl(180, 100%, 50%),
      hsl(240, 100%, 50%),
      hsl(300, 100%, 50%),
      hsl(360, 100%, 50%)
    );
    position: absolute;
    width: 600px;
    height: 600px;
    animation: rotate 1s linear infinite;
  }

  .container {
    background: red;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
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
