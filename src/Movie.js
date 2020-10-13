import React from 'react'
import './Movie.css'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280/";

const setVoteClass = (vote)=>{
  if(vote >= 6){
    return 'green'
  }
  else if (vote >= 5){
    return 'orange'
  }
  else{
    return 'red'
  }
}
const Movie = ({title, vote_average, overview, poster_path}) => {
    return (
      <div className="movie">
        <div className="movie-image">
          <img src={poster_path ? (IMAGE_API + poster_path) : "https://images.unsplash.com/photo-1533509163308-cddb96eda6aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} alt="" />
        </div>
        
        <div className="movie-info">
          <h3>{title}</h3>
          <h4 className={setVoteClass(vote_average)}>{vote_average}</h4>
        </div>
        <div className="details">
            <p>{overview} </p>
        </div>
      </div>
    );
}

export default Movie
