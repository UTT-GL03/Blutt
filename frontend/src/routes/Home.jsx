import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Global.css";
import Header from "../components/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <h2>Sélectionnez votre trajet:</h2>
        <form className="form-client">
          <div className="input-container">
            <label htmlFor="destination1">De:</label>
            <input type="text" name="destination1" id="destination1" />
          </div>
          <div className="input-container">
            <label htmlFor="destination2">A:</label>
            <input type="text" name="destination2" id="destination2" />
          </div>
          <div className="input-container">
            <label htmlFor="destination2">Date:</label>
            <input type="date" id="date" name="date" />
          </div>
        </form>
        <Link to="carpool-search">
          <button className="button" type="submit">
            Search
          </button>
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
