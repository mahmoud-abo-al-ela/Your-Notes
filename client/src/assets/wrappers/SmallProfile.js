import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    color: var(--primary-300);
    width: max-content;
    margin-bottom: 2rem;
    font-weight: 600;
  }
  .logout-btn,
  .modify-btn {
    font-size: 1.2rem;
    color: #fff;
    border-color: transparent;
    width: 300px;
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    padding: 0.2rem 0.5rem;
    margin: 0.3rem;
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .logout-btn {
    background-color: var(--primary-300);
  }
  .logout-btn:hover {
    background-color: var(--grey-500);
  }
  .modify-btn {
    background-color: var(--grey-500);
  }
  .modify-btn:hover {
    background-color: var(--primary-300);
  }
  @media (min-width: 520px) {
    display: none;
  }
`;

export default Wrapper;
