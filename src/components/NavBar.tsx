const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-primary mt-2 p-2 rounded-pill">
        <div className="container-fluid">
          <a href="/" className="navbar-brand text-white">
            Blog Site
          </a>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <a href="/" className="nav-link text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/new" className="nav-link text-white">
                New Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
