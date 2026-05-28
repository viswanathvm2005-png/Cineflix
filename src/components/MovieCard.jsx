function MovieCard({
                       title,
                       image,
                       isFavorite,
                       toggleFavorite
                   }) {

    return (

        <div className="movie-card">

            <img
                src={image}
                alt={title}
            />

            <h3>{title}</h3>

            <button
                onClick={toggleFavorite}
            >

                {
                    isFavorite
                        ? "❤️"
                        : "🤍"
                }

            </button>

        </div>
    );
}

export default MovieCard;