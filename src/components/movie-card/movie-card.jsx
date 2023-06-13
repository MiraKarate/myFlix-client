// Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import './movie-card.scss';


export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button className="button" onClick={() => onMovieClick(movie)} >Open</Button>
            </Card.Body>
        </Card>
    );
};

// Define the prop types this component should have
MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        genre: PropTypes.shape({
            name: PropTypes.string,
        }),
        director: PropTypes.shape({
            name: PropTypes.string,
        }),
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,
};