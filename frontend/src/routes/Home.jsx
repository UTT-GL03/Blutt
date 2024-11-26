import { Link } from "react-router-dom";
import "../styles/Home.css";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2>Selectionnez votre trajet:</h2>
        <form className="form_client">
          <label className="label" htmlFor="destination1">De:</label>
          <input type="text" name="destination1" id="destination1" />
          <label htmlFor="destination2">A:</label>
          <input type="text" name="destination2" id="destination2" />
          <label htmlFor="destination2">Date:</label>
          <input type="date" id="date" name="date" />
          <br></br>
        </form>
        <Link to="carpool-search">
          <button className="button" type="submit">Search</button>
          <br></br>
        </Link>
      </div>
      <Link to="carpooler-home">
      <button type="button" className="button">
        Switch profile
      </button>
      <br></br>
      </Link>
    </>
  );
}
