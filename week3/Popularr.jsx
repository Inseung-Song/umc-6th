
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useNavigate } from 'react-router-dom';

function getStarCount(voteAverage) {
  // voteAverage를 내림하여 별의 갯수로 변환
  const starCount = Math.floor(voteAverage);
  return starCount;
}

function Popularr(){
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 영화 정보 가져오기
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM1ZGIwY2ZmYzkwMDJjMjlmNDA3YWE2NmFlN2M0MCIsInN1YiI6IjY2MzJiNGU2YTFjNTlkMDEyOWU2ODZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YzBnU8BLgczNsKnR5DH0t3Ra7o-uiyIMeG_zYavWIGY'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results); 
      })
      .catch(err => console.error(err));
  }, []); 

  const onClickMovie = (movie) => {
    navigate(`/Popularr/${movie.id}`, {
      state: { 
        title: movie.title,
        posterPath: movie.poster_path,  
        vote: movie.vote_average,
        date: movie.release_date,
        overview: movie.overview
      }
    });
  };
  
  return (
    <div className="movie-container">
      {movies.map((movie) => ( 
        <div key={movie.id} className='card' onClick={() => onClickMovie(movie)}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <div className='cardBottom'>
            <h5 className='zero'>{movie.original_title}</h5>
            <p>{getStarCount(movie.vote_average)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Popularr;
