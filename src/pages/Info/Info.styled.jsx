import styled from "styled-components";

const SCInfo = styled.div`
  &.light {
    --color: #c2255c;
    --link-color: #dcffac;
  }

  &.dark {
    --color: #dadaea;
    --link-color: #eb2424;
  }

  background: var(--background);
  color: var(--color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 50px;

  p {
    max-width: 900px;
  }

  h2 {
    text-align: center;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }

  img {
    width: 500px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export default SCInfo;
