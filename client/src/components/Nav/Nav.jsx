import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div>
      <ul>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/sign-up">Sign Up</Link>
        )}
        <Link to="/login">Login</Link>
        {props.currentUser && (
          <div>
            <Link to="/projects">Projects</Link>
          </div>
        )}
      </ul>
    </div>
  );
}
