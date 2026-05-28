import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <BrowserRouter>

            {isLoggedIn && (
                <Navbar
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                />
            )}

            <Routes>

                <Route
                    path="/login"
                    element={
                        <Login
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    }
                />

                <Route
                    path="/"
                    element={
                        isLoggedIn
                            ? <Home />
                            : <Navigate to="/login" />
                    }
                />

                <Route
                    path="/favorites"
                    element={
                        isLoggedIn
                            ? <Favorites />
                            : <Navigate to="/login" />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;