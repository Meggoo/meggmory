import styled from "styled-components";
import linkIcon from "../../assets/external-link.svg";

const SCGame = styled.div`
  background: var(--background);
  display: flex;
  justify-content: center;
  padding: 50px;
  min-height: 100vh;

  /* .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px; */

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    button {
      position: absolute;
      top: 15px;
      z-index: 1;

      &.expand {
        right: 15px;
      }

      &.info {
        left: 15px;
      }

      &.close {
        right: 15px;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;

      a {
        color: var(--play-color);
        text-decoration: none;
        position: relative;

        &::before {
          content: "";
          background-image: url(${linkIcon});
          background-size: cover;
          position: absolute;
          bottom: 0;
          left: 110%;
          display: block;
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  /* @media screen and (max-width: 500px) {
      gap: 20px;
    }
  } */

  .game-over-screen,
  .error-screen {
    gap: 20px;
    padding: 50px;

    @media screen and (max-width: 600px) {
      padding: 20px;
    }
  }

  .loading-screen {
    gap: 77px;
    padding: 100px;
  }

  .game-over-screen,
  .error-screen,
  .loading-screen {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1,
    p,
    a {
      color: var(--play-color);
      text-align: center;
    }

    p {
      text-align: center;
      line-height: 20px;
    }

    a {
      margin-top: 30px;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 50px 10px;
  }
`;

export default SCGame;
