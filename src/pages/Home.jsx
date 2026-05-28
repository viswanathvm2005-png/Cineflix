import { useState } from "react";

function Home() {

    // FAVORITES STATE

    const [favorites, setFavorites] = useState(

        JSON.parse(localStorage.getItem("favorites")) || []

    );

    // SEARCH STATE

    const [search, setSearch] = useState("");

    const [selectedMovie, setSelectedMovie] = useState(null);

    // MOVIES DATA

    const movies = [

        {
            id: 1,
            title: "Avengers",
            image:
                "https://images.unsplash.com/photo-1635865165118-917ed9e20936",

            year: "2019",

            rating: "9.2",

            description:
                "Superheroes unite to save the universe."
        },

        {
            id: 2,
            title: "Batman",
            image:
                "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
        },

        {
            id: 3,
            title: "Spider-Man",
            image:
                "https://images.unsplash.com/photo-1635805737707-575885ab0820",
        },

        {
            id: 4,
            title: "Joker",
            image:
                "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806",
        },
    ];

    // SEARCH FILTER

    const filteredMovies = movies.filter((movie) =>

        movie.title
            .toLowerCase()
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

        localStorage.setItem(

            "favorites",
            JSON.stringify(updatedFavorites)

        );

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
                                    src={movie.image}
                                    alt={movie.title}
                                />

                                <h3>
                                    {movie.title}
                                </h3>

                                <button
                                    className="fav-btn"
                                    onClick={() =>
                                        addFavorite(movie)
                                    }
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
        </div>
    );
}

export default Home;