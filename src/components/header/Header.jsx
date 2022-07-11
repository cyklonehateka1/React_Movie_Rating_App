import { Link } from "react-router-dom";
import hero from "../../img/hero.png";
import "./Header.scss";

const header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">C.MOVIES</div>
      </Link>
      <div className="user-image">
        <img src={hero} alt="user" />
      </div>
    </div>
  );
};

export default header;
