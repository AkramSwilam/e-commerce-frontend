import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
import logo from "../../Assets/images/freshcart-logo.svg";
import { useContext } from "react";
import { CounterContextProvider } from "../../Context/counter";
import { UserContext } from "../../Context/user";

function Navbar() {
    let userContext = useContext(UserContext);
    let userToken = userContext.userToken

    function logout(params) {
        localStorage.removeItem("userToken")
        useContext.setUserToken("")
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            {userToken ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" aria-current="page">
                                            Home
                                            <span className="visually-hidden">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/products">Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/cart">Cart</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/categories">Categories</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/brands">Brands</Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>

                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <div className="d-flex align-items-center justify-content-center">
                                    {/* Social Icons */}
                                    <i className="fab mx-2 fa-facebook"></i>
                                    <i className="fab mx-2 fa-google"></i>
                                    <i className="fab mx-2 fa-twitter"></i>
                                </div>
                            </li>

                            <li className="nav-item">
                                {/* Adjust responsive behavior using flexbox classes */}
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    {!userToken ? (
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/register">Register</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Login</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={logout} to="/login">Logout</Link>
                                        </li>
                                    )}
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
