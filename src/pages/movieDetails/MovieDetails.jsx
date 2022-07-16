import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncMovieDetails,
  getSelectedItem,
} from "../../features/movies/movieSlice";
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from "react-icons/fa";
import "./MovieDetails.scss";
import { removeItem } from "../../features/movies/movieSlice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedItem);
  console.log(data);
  useEffect(() => {
    dispatch(asyncMovieDetails(imdbID));
    return () => {
      dispatch(removeItem());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <span>...loading</span>
      ) : (
        <>
          <div className="section-left">
            <h4 className="movie-title">{data.Title}</h4>
            <div className="movie-rating">
              <span>
                IMDB Rating{" "}
                <div className="star">
                  <FaStar />
                </div>{" "}
                : {data.imdbRating}
              </span>
              <span>
                IMDB Votes{" "}
                <div className="thumbs-up">
                  <FaThumbsUp />
                </div>{" "}
                : {data.imdbVotes}
              </span>
              <span>
                Runtime{" "}
                <div className="film">
                  <FaFilm />
                </div>{" "}
                : {data.Runtime}
              </span>
              <span>
                Year{" "}
                <div className="calendar">
                  <FaCalendar />
                </div>{" "}
                : {data.Year}
              </span>
            </div>
            <p className="movie-plot">{data.Plot}</p>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt="Poster" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
