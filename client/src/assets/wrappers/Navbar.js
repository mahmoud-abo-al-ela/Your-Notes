import styled from "styled-components";

const Wrapper = styled.nav`
  position: relative;
  height: var(--nav-height);
  background-color: var(--body-bg) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-3);
  .logo {
    display: flex;
    align-items: start;
    justify-content: center;
    width: 300px;
    color: var(--primary-300);
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .lang-button {
    background: transparent;
    font-size: 1.8rem;
    color: var(--primary-300);
    border: none;
    font-weight: 700;
    cursor: pointer;
  }
  .user-button {
    color: var(--primary-300);
    background-color: transparent !important;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
    display: flex;
    align-items: start;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }
  .dropdown {
    position: absolute;
    top: 60px;
    right: var(--right);
    width: max-content;
    height: max-content;
    background-color: var(--body-bg);
    box-shadow: var(--shadow-3);
    padding: 1rem 0.5rem;
    border-radius: 10px;
    text-align: center;
    visibility: hidden;
    z-index: 999;
  }
  .show-dropdown {
    visibility: visible;
  }

  @media (max-width: 740px) {
    position: sticky;
    top: 0;

    .logo {
      justify-content: flex-start;
    }

    img {
      width: 50%;
    }

    .btn-container button {
      font-size: 1.5rem;
    }

    .user-button {
      font-size: 1.75rem;
    }

    .nav-center {
      width: 90%;
    }
  }

  @media (max-width: 520px) {
    .dropdown {
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0 !important;
      width: 100%;
      height: calc(100vh - var(--nav-height));
      background-color: rgba(0, 0, 0, 0.7);
      box-shadow: var(--shadow-2);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 0;
      padding: 0;
      visibility: hidden;
      z-index: 999;
    }

    .show-dropdown {
      visibility: visible;
    }
  }
`;
export default Wrapper;
