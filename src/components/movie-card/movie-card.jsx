// Here you import the PropTypes library
import PropTypes from "prop-types";


export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            {movie.title}
        </div>
    );
};

// Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.shape({
            name: PropTypes.string.isRequired,
            bio: PropTypes.string
        }),
        genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string
        }),
        image: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};