import { Link, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Il Mio Blog
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item-custom">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item-custom">
              <NavLink className="nav-link" to="/chi-siamo">
                Chi siamo
              </NavLink>
            </li>
            <li className="nav-item-custom">
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
