import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/CarpoolSearch.css";

export default function CarpoolSearch() {
  return (
    <div className="container">
      <Header />
      <Link to="/">
        <button type="button" className="button">
          Retour
        </button>
      </Link>
      <div className="carpool-container"></div>
    </div>
  );
}
