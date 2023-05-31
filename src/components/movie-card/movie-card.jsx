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

// Define the prop types this component should have
MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            name: PropTypes.string,
        }),
        director: PropTypes.shape({
            name: PropTypes.string,
        }),
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};