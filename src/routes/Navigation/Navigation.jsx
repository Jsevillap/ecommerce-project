import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineShoppingCart, SiPandas } from "react-icons/all";
import { signOutUser } from "../../utils/firebase/firebase";
import dobleEELogo from "../../assets/dobleEE.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="nav-container">
        <nav className="container">
          <div className="logo">
            <Link to="/">
              <img src={dobleEELogo} alt="React Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/shop">Shop</Link>
            </li>

            <li className="nav-link">
              {currentUser ? (
                <span onClick={signOutHandler}>Sign-out</span>
              ) : (
                <Link to="/signIn">Sign in</Link>
              )}
            </li>

            <li className="nav-link">
              <Link to="/shop">Contact</Link>
            </li>

            <li className="nav-link cart">
              <Link to="/shop">
                <AiOutlineShoppingCart />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
