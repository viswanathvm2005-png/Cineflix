import { useState, useEffect } from "react";

function Home() {

    // FAVORITES STATE

    const [favorites, setFavorites] = useState([]);
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const savedFavorites =

            JSON.parse(localStorage.getItem("favorites")) || [];

        setFavorites(savedFavorites);

    }, []);

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );
    }, [favorites]);

    const API_KEY = "713dac07495bb378f22ea98484e8eef1";

    const fetchMovies = async () => {

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            );
            const data = await response.json();
            setMovies(data.results);
        }

        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const [selectedMovie, setSelectedMovie] = useState(null);

    // SEARCH FILTER

    const filteredMovies = movies.filter((movie) =>

        movie.title
            ?.toLowerCase()
            .includes(search.toLowerCase())

    );

    // FAVORITES FUNCTION

    const addFavorite = (movie) => {

        const oldFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];

        const alreadyAdded =
            oldFavorites.find((fav) => fav.id === movie.id);

        let updatedFavorites;

        // REMOVE FAVORITE

        if (alreadyAdded) {

            updatedFavorites = oldFavorites.filter(

                (fav) => fav.id !== movie.id

            );
        }

        // ADD FAVORITE

        else {

            updatedFavorites = [
                ...oldFavorites,
                movie
            ];
        }


        setFavorites(updatedFavorites);
    };

    return (

        <div className="home-page">

            {/* HERO SECTION */}

            <div className="hero-section">

                <h1>
                    Find Movies You'll Love
                    Without the Hassle
                </h1>

                <p>
                    Movies and TV Shows anytime
                </p>

                <button className="watch-btn">
                    Watch Now
                </button>

            </div>

            {/* SEARCH BAR */}

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

            {/* MOVIES SECTION */}

            <div className="movies-section">

                <h2 className="section-title">
                    Trending Movies
                </h2>

                <div className="movies-grid">

                    {
                        filteredMovies.map((movie) => (

                            <div
                                className="movie-card"
                                key={movie.id}
                                onClick={() =>
                                    setSelectedMovie(movie)
                                }
                            >

                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />

                                <h3>
                                    {movie.title}
                                </h3>

                                <button
                                    className="fav-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addFavorite(movie);
                                    }}
                                >

                                    {
                                        favorites.find(

                                            (fav) =>
                                                fav.id === movie.id

                                        )

                                            ? "❤️ "

                                            : "🤍 "
                                    }

                                </button>

                            </div>
                        ))
                    }

                </div>

            </div>
            {
                selectedMovie && (

                    <div
                        className="modal-overlay"
                        onClick={() =>
                            setSelectedMovie(null)
                        }
                    >

                        <div
                            className="movie-modal"
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        >

                            <img
                                src={selectedMovie.image}
                                alt={selectedMovie.title}
                            />

                            <h2>
                                {selectedMovie.title}
                            </h2>

                            <p>
                                ⭐ Rating:
                                {selectedMovie.rating}
                            </p>

                            <p>
                                📅 Year:
                                {selectedMovie.year}
                            </p>

                            <p>
                                {selectedMovie.description}
                            </p>

                            <button
                                onClick={() =>
                                    setSelectedMovie(null)
                                }
                            >
                                Close
                            </button>

                        </div>

                    </div>
                )
            }
            {
                selectedMovie && (

                    <div
                        className="modal-overlay"
                        onClick={() => setSelectedMovie(null)}
                    >

                        <div
                            className="movie-modal"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <img
                                src={selectedMovie.image}
                                alt={selectedMovie.title}
                            />

                            <h2>{selectedMovie.title}</h2>

                            <p>⭐ Rating: {selectedMovie.rating}</p>

                            <p>📅 Year: {selectedMovie.year}</p>

                            <p>{selectedMovie.description}</p>

                            <button
                                onClick={() => setSelectedMovie(null)}
                            >
                                Close
                            </button>

                        </div>

                    </div>
                )
            }
        </div>
    );
}

export default Home;