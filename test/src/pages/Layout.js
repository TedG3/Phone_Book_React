import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Add Contact</Link>
          </li>
          <li>
            <Link to="/contact">Search</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout; 
