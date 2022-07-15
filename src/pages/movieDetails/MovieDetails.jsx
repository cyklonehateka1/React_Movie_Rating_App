import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncMovieDetails,
  getSelectedItem,
} from "../../features/movies/movieSlice";

import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from "react-icons/fa";
const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedItem);
  console.log(data);
  useEffect(() => {
    dispatch(asyncMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <h4>{data.Title}</h4>
        <div className="movie-rating">
          <span>
            IMDB Rating <FaStar /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <FaThumbsUp /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <FaFilm /> : {data.Runtime}
          </span>
          <span>
            Year <FaCalendar /> : {data.Year}
          </span>
        </div>
        <p className="movie-plot">{data.Plot}</p>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
