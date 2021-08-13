import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">
                  MKpati
                </NavLink>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <NavLink 
                        style={{textDecoration:"none"}}
                        exact
                        activeClassName="menu_active" 
                        class="nav-link "
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink 
                        activeClassName="menu_active" 
                        class="nav-link "
                        style={{textDecoration:"none"}}
                        to="/service"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink 
                        activeClassName="menu_active" 
                        class="nav-link "
                        style={{textDecoration:"none"}}
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink 
                        activeClassName="menu_active" 
                        class="nav-link "
                        style={{textDecoration:"none",padding:"10px"}}
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
              
          </div>
        </div>
      </div> */
}
