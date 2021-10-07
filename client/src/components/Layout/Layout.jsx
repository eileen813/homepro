import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className="layout">
      <Nav currentUser={props.currentUser} handleLogout={props.handleLogout} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
