import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

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

    // user must login or signup
    if (!user) {
        return (
            <>
                <LoginView onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }} />
                or
                <SignupView />
            </>
        )
    }

    // displays movie-view when movie is selected (clicked)
    if (selectedMovie) {
        return (
            <>
                <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
                <button onClick={() => {
                    setUser(null); setToken(null); localStorage.clear();
                }}
                > Logout
                </button>

            </>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}

            <button onClick={() => {
                setUser(null); setToken(null); localStorage.clear();
            }}
            > Logout
            </button>

        </div>
    );
};