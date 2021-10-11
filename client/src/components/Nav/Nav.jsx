import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <nav>
      <Link to="/">
        <img className="house" src="house.png" alt="House"></img>

        <h1 className="title">HomePro</h1>
      </Link>
      {props.currentUser ? (
        <div>
          <p className="username">Welcome, {props.currentUser.username}</p>

          <button className="btn" onClick={props.handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <Link className="links" to="/sign-up">
          Sign Up
        </Link>
      )}

      <Link className="links" to="/login">
        Login
      </Link>

      {props.currentUser && (
        <Link className="links" to="/projects">
          Projects
        </Link>
      )}
    </nav>
  );
}
