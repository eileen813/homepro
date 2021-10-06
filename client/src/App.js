import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./screens/Login/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
