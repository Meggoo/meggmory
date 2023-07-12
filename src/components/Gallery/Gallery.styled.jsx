import styled from "styled-components";

const SCGallery = styled.div`
  --top: 0;
  --left: 0;
  --initial-width: 0;
  --initial-height: 0;
  --final-width: 0;
  --final-height: 0;
  --timing: 0.33s;

  .byme {
    position: fixed;
    top: 50px;
    left: 50px;
    z-index: 100;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 20px;

  .image-card {
    position: relative;

    button {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
    }
  }

  .backdrop {
    background: #a493bf99;
    position: fixed;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    animation: hide var(--timing) linear forwards;

    &.open {
      pointer-events: all;
      opacity: 1;
      animation: show var(--timing) linear forwards;
    }

    @keyframes show {
      from {
        opacity: 0;
        pointer-events: none;
      }

      to {
        opacity: 1;
        pointer-events: all;
      }
    }

    @keyframes hide {
      from {
        opacity: 1;
        pointer-events: all;
      }

      to {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  .close-button {
    position: fixed;
    top: 25px;
    left: 25px;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--timing);

    &.open {
      opacity: 1;
      pointer-events: all;
    }

    @media screen and (max-width: 500px) {
      top: auto;
      bottom: 50px;
    }
  }

  .popup-image {
    position: fixed;
    object-fit: contain;
    animation: pop-out var(--timing) linear forwards;
    z-index: 1;

    &.open {
      animation: pop-up var(--timing) linear forwards;
    }

    @keyframes pop-up {
      from {
        width: var(--initial-width);
        height: var(--initial-height);
        top: var(--top);
        left: var(--left);
      }

      to {
        width: min(100vw, var(--final-width));
        height: min(100vh, var(--final-height));
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    @keyframes pop-out {
      from {
        width: min(100vw, var(--final-width));
        height: min(100vh, var(--final-height));
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: visible;
      }

      to {
        width: var(--initial-width);
        height: var(--initial-height);
        top: var(--top);
        left: var(--left);
        transform: translate(0, 0);
        visibility: hidden;
      }
    }
  }
`;

export default SCGallery;
