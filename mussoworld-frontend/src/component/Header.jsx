import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {

    const authContext = useAuth();

    function handleLogout() {
        authContext.logout();
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <span className="navbar-brand ms-2 fs-2 fw-bold text-black">Musso World</span>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    <Link className="nav-link" to="/main">Home</Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link className="nav-link" to="/todolist">TodoList</Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link className="nav-link" to="/front">Front-end</Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link className="nav-link" to="/back">Back-end</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {authContext.authenticated && <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>}

                            </li>
                            <li className="nav-item fs-5">
                                {authContext.authenticated && <Link className="nav-link" to="/mypage">Mypage</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {!authContext.authenticated && <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}