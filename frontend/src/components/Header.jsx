import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link className="header-title" to="/">
        Blutt
      </Link>
      <img className="logo" src="/src/assets/logo.png" />
    </div>
  );
}
