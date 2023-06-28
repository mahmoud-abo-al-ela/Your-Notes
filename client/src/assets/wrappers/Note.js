import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--grey-100);
  padding: 1rem 0;

  h5 {
    margin: 0 1rem;
  }

  .done {
    text-decoration: line-through;
    color: var(--grey-300);
  }

  .delete-btn {
    background-color: transparent;
    border: none;
    margin-left: var(--margin-l);
    margin-right: var(--margin-r);
    cursor: pointer;
    font-size: 1rem;
  }

  .check-label {
    margin-top: 3px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
  }

  .check-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid var(--grey-500);
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  .check-label.checked .checkmark {
    background-color: var(--primary-500);
  }

  .check-label.checked .checkmark svg {
    display: block;
  }

  .checkmark svg {
    display: none;
    color: white;
  }

  @media (max-width: 425px) {
    h5 {
      font-size: 1rem;
    }

    .checkmark,
    .delete-btn svg {
      width: 1.2rem;
      height: 1.2rem;
      padding: 3px;
    }
  }

  @media (min-width: 426px) and (max-width: 968px) {
    h5 {
      font-size: 1.2rem;
    }

    .checkmark,
    .delete-btn svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export default Wrapper;
