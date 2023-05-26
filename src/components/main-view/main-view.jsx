import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Call Me by Your Name",
            description: "Call Me by Your Name (Italian: Chiamami col tuo nome) is a 2017 coming-of-age romantic drama film directed by Luca Guadagnino. Its screenplay, by James Ivory, who also co-produced, is based on the 2007 novel of the same title by André Aciman. The film is the final instalment in Guadagnino\'s thematic Desire trilogy, after I Am Love (2009), and A Bigger Splash (2015). Set in 1983 in northern Italy, Call Me by Your Name chronicles the romantic relationship between a 17-year-old, Elio Perlman (Timothée Chalamet), and Oliver (Armie Hammer), a 24-year-old graduate-student assistant to Elio''s father Samuel (Michael Stuhlbarg), an archaeology professor.",
            genre: "Romantic Drama",
            director: "Luca Guadagnino",
            image:
                "https://upload.wikimedia.org/wikipedia/en/c/c9/CallMeByYourName2017.png",
        },
        {
            id: 2,
            title: "West Side Story",
            description: "West Side Story is a 2021 American musical romantic drama film directed and co-produced by Steven Spielberg from a screenplay by Tony Kushner. It is the second feature-length adaptation of the 1957 stage musical of the same name. It stars Ansel Elgort and Rachel Zegler in her film debut with Ariana DeBose, David Alvarez, Mike Faist, and Rita Moreno in supporting roles. Moreno, who starred in the 1961 film adaptation, also served as an executive producer alongside Kushner. The film features music composed by Leonard Bernstein with lyrics by Stephen Sondheim.",
            genre: "Musical",
            director: "Steven Spielberg",
            image:
                "https://upload.wikimedia.org/wikipedia/en/2/2e/West_Side_Story_2021_Official_Poster.jpg",
        },
        {
            id: 3,
            title: "Blade Runner",
            description: "Blade Runner is a 1982 science fiction film directed by Ridley Scott, and written by Hampton Fancher and David Peoples. Starring Harrison Ford, Rutger Hauer, Sean Young, and Edward James Olmos, it is an adaptation of Philip K. Dick's 1968 novel Do Androids Dream of Electric Sheep? The film is set in a dystopian future Los Angeles of 2019, in which synthetic humans known as replicants are bio-engineered by the powerful Tyrell Corporation to work on space colonies. When a fugitive group of advanced replicants led by Roy Batty (Hauer) escapes back to Earth, burnt-out cop Rick Deckard (Ford) reluctantly agrees to hunt them down.",
            genre: "Science Fiction",
            director: "Ridley Scott",
            image:
                "https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png",
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
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
        </div>
    );
};