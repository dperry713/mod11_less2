import React, { useState } from 'react';

const MoviesList = () => {
    // Task 1: Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', genre: 'Sci-Fi', description: 'A thief who enters the dreams of others to steal secrets from their subconscious.' },
        { id: 2, title: 'The Dark Knight', genre: 'Action', description: 'Batman faces the Joker, a criminal mastermind wreaking havoc on Gotham City.' },
        { id: 3, title: 'Pulp Fiction', genre: 'Crime', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.' },
        { id: 4, title: 'The Matrix', genre: 'Action', description: 'A computer programmer discovers a dystopian world ruled by machines.' },
    ]);

    // Task 2: State for toggling movie details
    const [expandedMovieId, setExpandedMovieId] = useState(null);

    // Task 4: State for toggling view
    const [showOnlyAction, setShowOnlyAction] = useState(false);

    // Task 2: Toggle movie details
    const toggleMovieDetails = (id) => {
        setExpandedMovieId(expandedMovieId === id ? null : id);
    };

    // Task 3: Remove a movie
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    // Task 4: Toggle view function
    const toggleView = () => {
        setShowOnlyAction(!showOnlyAction);
    };

    // Filter movies based on the current view
    const displayedMovies = showOnlyAction 
        ? movies.filter(movie => movie.genre === 'Action')
        : movies;

    return (
        <div>
            {/* Task 4: Toggle view button */}
            <button onClick={toggleView}>
                {showOnlyAction ? 'Show All Movies' : 'Show Only Action Movies'}
            </button>

            <ul>
                {displayedMovies.map(movie => (
                    <li key={movie.id}>
                        {/* Task 2: Clickable movie title */}
                        <span onClick={() => toggleMovieDetails(movie.id)}>
                            {movie.title}
                        </span>

                        {/* Task 3: Remove button */}
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>

                        {/* Task 2: Conditional rendering of movie details */}
                        {expandedMovieId === movie.id && (
                            <p>{movie.description}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
