import styled from "styled-components";

const SCSidebar = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;

  &.light {
    --text-background: #f6e7f2;
    --button-background: #dcb6d2;
    --color: #786a7a;
    --toggle-background: black;
    --toggle-color: white;
  }

  &.dark {
    --text-background: #681818;
    --button-background: #a92c2c;
    --color: #dedeee;
    --toggle-background: white;
    --toggle-color: black;
  }

  .sidebar-backdrop {
    position: absolute;
    inset: 0;
    background: #b391bb99;
    opacity: 0;
    transition: opacity 0.33s;
  }

  .sidebar-content {
    background: var(--background);
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    transform: translate(100%);
    transition: transform 0.33s;

    .game-info {
      color: var(--color);

      .details {
        display: flex;
        flex-direction: column;
        gap: 20px;

        a {
          text-decoration: none;
        }

        button,
        a {
          background: var(--button-background);
          border: none;
        }

        p {
          background: var(--text-background);
        }

        p,
        button,
        a {
          color: var(--color);
          padding: 20px 30px;
          text-align: center;
          border-radius: 5px;
          transition: background-color 0.33s;

          @media (hover: hover) {
            &:hover {
              background: var(--text-background);
            }
          }
        }
      }
    }

    .settings {
      display: flex;
      flex-direction: column;
      gap: 25px;

      a {
        color: var(--color);
        text-decoration: none;

        &::after {
          background: var(--color);
        }
      }

      .toggle {
        background: var(--toggle-background);
        color: var(--toggle-color);

        align-self: center;
      }
    }
  }

  .sidebar-control {
    position: absolute;
    top: 25px;
    left: 0;
    transform: translate(-50px);
    transition: transform 0.33s;
    pointer-events: all;

    @media screen and (max-width: 500px) {
      top: auto;
      bottom: 50px;
    }
  }

  &.open {
    pointer-events: all;

    .sidebar-backdrop {
      opacity: 1;
    }

    .sidebar-content {
      transform: translate(0);
    }

    .sidebar-control {
      transform: translate(25px);
    }
  }
`;

export default SCSidebar;
