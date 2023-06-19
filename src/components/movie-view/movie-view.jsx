import PropTypes from 'prop-types';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';

export const MovieView = ({ movie }) => {
    const { movieId } = useParams();
    const movie = movie.find((m) => m.id === movieId);

    return (
        <div className='blackborder'>
            <div>
                <img src={movie.image} className="w-100" />
            </div>
            <div className='margin'>
                <span className="bold">Title: </span>
                <span>{movie.title}</span>
            </div>
            <div className='margin'>
                <span className="bold">Description: </span>
                <span>{movie.description}</span>
            </div>
            <div className='margin'>
                <span className="bold">Genre: </span>
                <span>{movie.genre.Name}</span>
            </div>
            <div className='margin'>
                <span className="bold">Director: </span>
                <span>{movie.director.Name}</span>
            </div>
            <Link to={`/`}>
                <button className="button-primary" style={{ cursor: "pointer" }}> Back </button>
            </Link>
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
};
