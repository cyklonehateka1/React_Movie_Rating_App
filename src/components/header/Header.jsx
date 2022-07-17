import { Link } from "react-router-dom";
import hero from "../../img/hero.png";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      alert("Pleas enter a movie or show title");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">C.MOVIES</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search for Movie or a show"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={hero} alt="user" />
      </div>
    </div>
  );
};

export default Header;
