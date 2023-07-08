import styled from "styled-components";

const SCSidebar = styled.div`
  padding: 20px;
  position: fixed;
  inset: 0;
  pointer-events: none;

  .toggle {
    background: red;
  }

  .sidebar-backdrop {
    position: absolute;
    inset: 0;
    background: #56565599;
    opacity: 0;
    transition: opacity 0.33s;
  }

  .sidebar-content {
    background: #e58a8a;
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
  }

  .sidebar-control {
    position: absolute;
    top: 50px;
    right: 100%;
    transform: translate(-50px);
    transition: transform 0.33s;
    pointer-events: all;
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
      transform: translate(50px);
    }
  }
`;

export default SCSidebar;
