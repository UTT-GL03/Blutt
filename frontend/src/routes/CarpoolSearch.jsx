import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/CarpoolSearch.css";
import data from "../../public/sample_data.json";
import CarpoolEntry from "../components/CarpoolEntry.jsx";

export default function CarpoolSearch() {
  return (
    <div className="container">
      <Header />
      <Link to="/">
        <button type="button" className="button">
          Retour
        </button>
      </Link>
      <div className="carpool-container">
        {data.carpools.map((carpool) => (
          <CarpoolEntry carpool={carpool} />
        ))}
      </div>
    </div>
  );
}
