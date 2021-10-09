import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <h1>this is my Nav component</h1>
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
    </div>
  );
}
