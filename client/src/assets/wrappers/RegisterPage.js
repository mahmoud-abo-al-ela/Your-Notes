import styled from "styled-components";

const Wrapper = styled.section`
  .light_layer {
    min-height: 100vh;
    background-color: var(--layer-theme);
  }
  .form {
    display: flex;
    margin-top: 3rem;
  }
  .inputs {
    width: 100%;
    background-color: var(--body-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }
  h1 {
    text-align: center;
    color: var(--primary-500);
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  @media (max-width: 920px) {
    .cover {
      display: none;
    }
    /* .form {
      margin-top: 5rem;
    } */
  }
  @media (max-width: 480px) {
    .inputs {
      padding: 1rem;
    }
    .form {
      width: 90vw;
    }
  }
`;
export default Wrapper;
