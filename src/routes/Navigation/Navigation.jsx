import { Outlet, Link } from "react-router-dom";
import ReactLogo from "../../assets/react.svg";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={ReactLogo} alt="React Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/shop">Shop</Link>
          </li>

          <li className="nav-link">
            <Link to="/shop">Sign in</Link>
          </li>

          <li className="nav-link">
            <Link to="/shop">Contact</Link>
          </li>

          <li className="nav-link">
            <Link to="/shop">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
