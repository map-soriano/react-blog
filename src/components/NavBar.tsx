import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-primary mt-2 p-2 rounded-pill">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">
            Blog Site
          </Link>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new" className="nav-link text-white">
                New Blog
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
