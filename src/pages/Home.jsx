import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import banner from "../assets/banner.png";
function Home() {

    const [search, setSearch] = useState("");

    const movies = [
        {
            id: 1,
            title: "Avengers",
            image:
                "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
        },
        {
            id: 2,
            title: "Batman",
            image:
                "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
        },
        {
            id: 3,
            title: "Spider-Man",
            image:
                "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"
        },
        {
            id: 4,
            title: "Joker",
            image:
                "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
        }
    ];
    return (
        <>
            <Navbar />

            <section className="hero">
                <img
                    src={banner}
                    alt="banner"
                    className="hero-image"
                />

                <h1>
                    Find Movies You'll Love
                    <br />
                    Without the Hassle
                </h1>

                <p>Movies and TV Shows anytime</p>
                <button>Watch Now</button>
            </section>

            {/* ADD SEARCH BOX HERE */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />
            </div>
            <h2 className="section-title">
                Trending Movies
            </h2>
            {/* MOVIES SECTION */}
            <section className="movies">
                {movies
                    .filter((movie) =>
                        movie.title
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            image={movie.image}
                        />
                    ))}
            </section>
        </>
    );
}

export default Home;