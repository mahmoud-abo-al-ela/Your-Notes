import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 70vh;
  .top {
    display: flex;
    width: 100%;
  }
  .form-input {
    box-shadow: none;
    font-size: 1.2rem;
    outline: none;
    color: var(--grey-500);
    direction: var(--direction) !important;
  }
  .notes {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border-radius: var(--borderRadius);
    background: var(--body-bg);
    margin: 0;
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .notes {
    scrollbar-width: thin;
    scrollbar-color: var(--primary-500) var(--body-bg);
  }

  .notes::-webkit-scrollbar {
    width: 8px;
  }

  .notes::-webkit-scrollbar-track {
    background-color: var(--body-bg);
  }

  .notes::-webkit-scrollbar-thumb {
    background-color: var(--primary-500);
    border-radius: 4px;
  }

  .stats {
    box-shadow: var(--shadow-3);
    background-color: var(--body-bg);
    padding: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1rem;
    color: var(--grey-500);
  }
  .stats p {
    margin: auto;
  }
  .stats button {
    cursor: pointer;
    font-weight: bold;
    border: none;
    background-color: transparent;
    font-size: 1rem;
    width: fit-content;
    color: var(--grey-500);
  }
  .margin {
    margin: 0 0.5rem;
  }
  .stats button.active {
    color: var(--primary-500);
  }

  @media (max-width: 425px) {
    width: 90%;
    max-height: 80vh;
    top: 55%;
    .notes {
      width: 100%;
    }
    .top {
      width: 100%;
    }
    .form-input {
      font-size: 1rem;
    }
    .stats p {
      font-size: 0.65rem;
    }
    .stats button {
      font-size: 0.65rem;
    }
  }

  @media (min-width: 426px) and (max-width: 900px) {
    width: 75%;
    max-height: 75vh;
    .notes {
      width: 100%;
    }
    .top {
      width: 100%;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 901px) and (max-width: 1297px) {
    width: 60%;
    max-height: 75vh;
    .notes {
      width: 100%;
    }
    .top {
      width: 100%;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
