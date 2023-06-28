import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .background {
    box-shadow: var(--shadow-3);
    position: relative;
    top: 0;
    height: 25vh;
    background-image: url(/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    width: 100%;
    z-index: -2;
  }
  .background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--layer-theme);
    z-index: 1;
  }
`;
export default Wrapper;
