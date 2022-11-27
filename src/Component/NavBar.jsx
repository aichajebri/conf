import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  const navigate = useNavigate();

  // HANDLE LOGOUT EVENT
  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");

    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();

    navigate("/");
  };
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="#" exact>
          We-Conference{" "}
        </Tabs>
        <Tabs to="all" exact>
          All Conference
        </Tabs>
        <Tabs to="add" exact>
          Add Conference
        </Tabs>
        {/* <Tabs to="delete" exact>
          delete Co
        </Tabs>{" "}
        <Tabs to="edit" exact>
          edit User
        </Tabs> */}
        {/* <div className="logout">
          <Tabs to="home" onClick={logout} exact>
            Logout
          </Tabs>
        </div> */}
      </Toolbar>
      {/* <div className="logout">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <Link className="dropdown-item" to="#" onClick={logout}>
            Logout
          </Link>
        </nav>
      </div> */}
    </Header>
  );
};

export default NavBar;
