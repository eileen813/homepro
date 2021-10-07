import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
