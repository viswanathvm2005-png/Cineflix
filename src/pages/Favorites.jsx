import { useEffect, useState } from "react";

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        const savedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];

        setFavorites(savedFavorites);

    }, []);

    return (

        <div className="favorites-page">

            <h1>Favorite Movies</h1>

            <div className="movies">

                {
                    favorites.map((movie) => (

                        <div
                            className="movie-card"
                            key={movie.id}
                        >

                            <img
                                src={movie.image}
                                alt={movie.title}
                            />

                            <h3>{movie.title}</h3>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Favorites;