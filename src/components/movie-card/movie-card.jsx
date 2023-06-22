
import React from "react";
import PropTypes from "prop-types";// Here you import the PropTypes library
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './movie-card.scss';


export const MovieCard = ({ movie }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/movies/${encodeURIComponent(movie.id)}`} className="mt-auto">
                    <Button className="button-primary">See more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

// Define the prop types this component should have
MovieCard.propTypes = {
    movie: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string.isRequired
    }).isRequired
};