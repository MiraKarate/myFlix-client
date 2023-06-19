import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Row, Col, Button, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './main-view.scss';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [favoriteMovie, setFavoriteMovie] = useState([]);
    //const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    // if (!user && storedUser) {
    //    setFavoriteMovie(storedUser.FavoriteMovies)
    //}

    // if (!user && storedUser) {
    //    setUser(storedUser);
    //   setToken(storedToken);
    //}

    //favorite list 
    // if (user) {
    //    var favoriteMovieList = movie.filter((m) => favoriteMovie.includes(m._id));
    // }

    useEffect(() => {
        if (!(user && token)) {
            return;
        }

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

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // user must login or signup
    return (
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                    window.location.reload();
                }}
            //onSearch={(query) => {
            //    setViewMovies(movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase())));
            //}}
            />

            <Row className="justify-content-md-center">
                <Routes>

                    <Route
                        path="/signup"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    < Col md={6}>
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <LoginView onLoggedIn={(user) => setUser(user)} />
                                    </Col>
                                )}
                            </>

                        }
                    />

                    <Route
                        path="/movies/:movieId"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty</Col>
                                ) : (
                                    <Col md={8}>
                                        <MovieView
                                            user={user}
                                            token={token}
                                            movies={movies}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        path="/"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col> The list is empty!</Col>
                                ) : (
                                    <>
                                        {movies.map((movie) => (
                                            <Col className="mb-4" key={movie.id} md={3}>
                                                <MovieCard movie={movie} />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};