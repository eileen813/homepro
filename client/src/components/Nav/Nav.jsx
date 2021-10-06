import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>this is my Nav component</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
