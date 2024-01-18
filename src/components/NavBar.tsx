import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar fixed-top bg-primary p-1">
        <div className="container-fluid">
          <Link to="/">
            <span className="navbar-brand mb-0 text-light h1">Blog Site</span>
          </Link>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <Link to="/">
                <span className="nav-link text-light">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new">
                <button className="btn btn-info text-light">New Blog</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
