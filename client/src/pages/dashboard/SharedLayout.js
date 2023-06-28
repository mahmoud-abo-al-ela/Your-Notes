import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { NavBar, Background } from "../../components";
const SharedLayout = () => {
  return (
    <Wrapper>
      <main>
        <div>
          <NavBar />
          <div className="dashboard-page">
            <div className="background"></div>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
