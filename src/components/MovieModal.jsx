// MovieModal.jsx
import React from "react";

export default function MovieModal({ isOpen, closeModal, movies }) {
  if (!isOpen) return null; // If the modal is not open, return null (don't render the modal)

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={closeModal}>
          X
        </button>
        <h2>Search Results</h2>
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
