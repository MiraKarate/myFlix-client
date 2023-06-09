import PropTypes from 'prop-types';
import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    console.log(movie)
    return (
        <div>
            <div>
                <img src={movie.Image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre.Name}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director.Name}</span>
            </div>
            <button onClick={onBackClick} className="back-button">Back</button>
        </div>
    );
};

// Define the prop types this component should have
MovieView.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string,
        }),
        director: PropTypes.shape({
            name: PropTypes.string,
            bio: PropTypes.string
        }),
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};
