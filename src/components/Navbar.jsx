import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {

    const navigate = useNavigate();

    const location = useLocation();

    const handleLogout = () => {

        setIsLoggedIn(false);

        navigate("/login");
    };

    return (

        <nav className="navbar">

            <h1>CineFlix</h1>

            <div className="nav-links">

                <Link to="/">Home</Link>

                {
                    location.pathname !== "/favorites" && (
                        <Link to="/favorites">
                            Favorites
                        </Link>
                    )
                }

                {
                    isLoggedIn && (
                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )
                }

            </div>

        </nav>
    );
}

export default Navbar;