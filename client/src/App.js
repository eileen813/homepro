import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";
import { loginUser } from "./services/auth";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
  };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
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
