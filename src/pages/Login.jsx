import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [message, setMessage] =
        useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email || !password) {

            setMessage(
                "Please fill all fields"
            );

            return;
        }

        if (password.length < 6) {

            setMessage(
                "Password must be at least 6 characters"
            );

            return;
        }

        setMessage(
            "Login Successful ✅"
        );

        setTimeout(() => {

            setIsLoggedIn(true);

            navigate("/");

        }, 1000);
    };

    return (

        <div className="login-container">

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >

                <h1>Login</h1>

                <input
                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                {/* PASSWORD BOX */}

                <div className="password-box">

                    <input
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }

                        placeholder="Enter Password"

                        value={password}

                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <span
                        className="eye-icon"

                        onClick={() =>
                            setShowPassword(
                                !showPassword
                            )
                        }
                    >
                        👁
                    </span>

                </div>

                <button type="submit">
                    Login
                </button>

                {
                    message && (
                        <p className="message">
                            {message}
                        </p>
                    )
                }

            </form>

        </div>
    );
}

export default Login;