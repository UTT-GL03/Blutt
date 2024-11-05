import { Link } from "react-router-dom";
import "../App.css";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="accueil_client">
        <h2>Selectionnez votre trajet:</h2>
        <form className="form_client">
          <label htmlFor="destination1">De:</label>
          <input type="text" name="destination1" id="destination1" />
          <label htmlFor="destination2">A:</label>
          <input type="text" name="destination2" id="destination2" />
          <label htmlFor="destination2">Date:</label>
          <input type="date" id="date" name="date" />
          <br></br>
        </form>
        <Link to="carpool-search">
          <button type="submit">Search</button>
          <br></br>
        </Link>
      </div>
      <button type="button" className="switchbutton">
        Switch profile
      </button>
      <br></br>
    </>
  );
}
