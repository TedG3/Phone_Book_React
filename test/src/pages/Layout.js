import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav>
      <div id='nav_div'>
      <Link to="/"><button className="button start">Home</button></Link>
      <Link to="/blogs"><button className ="button" >Add Contact</button></Link>
      <Link className="link" to="/contact"><button className ="button end">Search</button></Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;

