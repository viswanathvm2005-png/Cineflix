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

            <div className="favorites-grid">

                {favorites.map((movie) => (

                    <div className="favorite-card" key={movie.id}>

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />

                        <h3>{movie.title}</h3>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Favorites;