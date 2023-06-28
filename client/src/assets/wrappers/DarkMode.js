import styled from "styled-components";

const Wrapper = styled.div`
  .theme-button {
    color: var(--primary-300);
    background-color: transparent !important;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    margin: 0 2rem;
  }

  @media (max-width: 740px) {
    .theme-button {
      font-size: 1.75rem;
      margin: 0 1rem;
    }
  }
`;

export default Wrapper;
