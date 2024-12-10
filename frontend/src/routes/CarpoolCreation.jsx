import { Link } from "react-router-dom";
import Header from "../components/Header";
import CarpoolInfoForm from "../components/CarpoolInfoForm";

export default function CarpoolerHome() {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2>Entrez les données de votre trajet</h2>
        <CarpoolInfoForm create={true} />
        <button className="button" type="submit">
          Submit
        </button>
      </div>
      <Link to="/">
        <button type="button" className="button">
          Switch profile
        </button>
      </Link>
    </>
  );
}
