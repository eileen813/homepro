import "./App.css";
import Layout from "./components/Layout/Layout";
import Nav from "./components/Nav/Nav";
import LoginRegister from "./screens/LoginRegister/LoginRegister";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <LoginRegister />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
