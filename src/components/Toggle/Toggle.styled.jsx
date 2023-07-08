import styled from "styled-components";

const SCToggle = styled.div`
  --width: 30px;
  --height: 25px;
  --ball-radius: 8px;
  --padding: 5px;
  display: flex;
  width: fit-content;
  position: relative;
  border-radius: calc(2 * var(--height));

  input[type="radio"] {
    appearance: none;
    width: var(--width);
    height: var(--height);

    &:first-of-type:checked {
      ~ span {
        transform: translate(var(--padding), -50%);
      }
    }

    &:last-of-type:checked {
      ~ span {
        transform: translate(
          calc(2 * var(--width) - 100% - var(--padding)),
          -50%
        );
      }
    }
  }

  .ball {
    width: calc(2 * var(--ball-radius));
    height: calc(2 * var(--ball-radius));
    position: absolute;
    top: 50%;
    left: 0;
    transition: transform 0.33s;
    border-radius: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export default SCToggle;
