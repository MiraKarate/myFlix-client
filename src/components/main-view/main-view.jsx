import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './main-view.scss';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token)
            return;

        fetch("https://myflix90.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                const movies = data.map((movie) => {
                    return {
                        image: movie.ImagePath,
                        id: movie.key,
                        title: movie.Title,
                        description: movie.Description,
                        director: movie.Director,
                        genre: movie.Genre,
                    };
                });

                setMovies(movies);
            });
    }, [token]);

    const onLoggedOut = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
    };

    // user must login or signup
    return (
        <Row className="justify-content-md-center">
            {!user ? (
                <Col md={5}>
                    <LoginView onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }} />
                    or
                    <SignupView />
                </Col>
            ) : selectedMovie ? (
                <Col md={8}>
                    <MovieView
                        movie={selectedMovie}
                        onBackClick={() => setSelectedMovie(null)}
                    />
                </Col>
            ) : movies.length === 0 ? (
                <div>The list is empty!</div>
            ) : (
                <>
                    {movies.map((movie) => (
                        <Col className="m-5" key={movie.id} md={3} >
                            <MovieCard
                                movie={movie}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        </Col>
                    ))}
                    <button className="button" onClick={() => {
                        setUser(null); setToken(null); localStorage.clear();
                    }}
                    > Logout
                    </button>
                </>
            )}

        </Row>
    );
};

