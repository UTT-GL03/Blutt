import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Global.css";
import Header from "../components/Header.jsx";
import CarpoolInfoForm from "../components/CarpoolInfoForm.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2>Sélectionnez votre trajet:</h2>
        <CarpoolInfoForm />
        <Link to="carpool-search">
          <button className="button" type="submit">
            Search
          </button>
        </Link>
      </div>
      <Link to="carpool-creation">
        <button type="button" className="button">
          Switch profile
        </button>
      </Link>
    </>
  );
}
