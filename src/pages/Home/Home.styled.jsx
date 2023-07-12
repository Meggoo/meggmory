import styled from "styled-components";

const SCHome = styled.div`
  background: var(--background);
  min-height: 100vh;
  display: grid;
  place-items: center;

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    position: relative;
    padding: 20px;

    .logo {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      img {
        width: 500px;

        @media screen and (max-width: 500px) {
          width: 300px;
        }
      }

      p {
        color: var(--text-color);
      }
    }

    a {
      text-decoration: none;

      &.b-l {
        color: var(--play-color);
      }
    }
  }
`;

export default SCHome;
