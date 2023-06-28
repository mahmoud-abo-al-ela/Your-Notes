import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  top: 5rem;
  right: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: auto;
  color: var(--textColor);

  h3 {
    margin: 0;
    color: var(--primary-500);
  }

  .form {
    width: 80%;
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border-radius: var(--borderRadius);
    background: var(--body-bg);
    margin: 0;
    padding: 1rem;
    box-shadow: var(--shadow-3);
    box-sizing: border-box;
  }

  .form-center {
    margin: 1rem 2rem;
    display: flex;
    flex-direction: column;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  button {
    padding: 1rem 0;
    height: auto;
  }

  button.btn-block {
    align-self: flex-end;
    margin: 1rem auto;
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 90%;
    right: 5%;

    .form {
      width: 100%;
    }

    .form-center {
      margin: 0;
    }

    .top {
      width: 100%;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 426px) and (max-width: 968px) {
    width: 65%;
    right: 15%;
    .form-center {
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export default Wrapper;
