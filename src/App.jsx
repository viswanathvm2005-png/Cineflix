import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";

function App() {
  return (
      <BrowserRouter>

        <Routes>

          <Route
              path="/"
              element={<Home />}
          />

          <Route
              path="/movies"
              element={<Movies />}
          />

          <Route
              path="/about"
              element={<About />}
          />

        </Routes>

      </BrowserRouter>
  );
}

export default App;