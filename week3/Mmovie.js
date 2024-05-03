const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM1ZGIwY2ZmYzkwMDJjMjlmNDA3YWE2NmFlN2M0MCIsInN1YiI6IjY2MzJiNGU2YTFjNTlkMDEyOWU2ODZmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YzBnU8BLgczNsKnR5DH0t3Ra7o-uiyIMeG_zYavWIGY'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));