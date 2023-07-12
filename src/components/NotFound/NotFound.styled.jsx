import styled from "styled-components";

const SCNotFound = styled.div`
  background: var(--background);
  min-height: 100vh;
  display: grid;
  place-items: center;

  &.light {
    color: red;
  }

  &.dark {
    color: red;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    a {
      text-decoration: none;
      color: #9c0dc4
    }
  }
`;

export default SCNotFound;
