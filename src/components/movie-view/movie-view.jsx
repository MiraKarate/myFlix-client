import PropTypes from 'prop-types';
import './movie-view.scss';

export const MovieView = ({ movie, onBackClick }) => {
    console.log(movie)
    return (
        <div className='blackborder'>
            <div>
                <img src={movie.image} className="w-100" />
            </div>
            <div>
                <span className="bold">Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span className="bold">Description: </span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span className="bold">Genre: </span>
                <span>{movie.genre.Name}</span>
            </div>
            <div>
                <span className="bold">Director: </span>
                <span>{movie.director.Name}</span>
            </div>
            <button onClick={onBackClick} className="back-button" style={{ cursor: "pointer" }}> Back </button>
        </div >
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
