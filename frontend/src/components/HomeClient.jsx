import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function HomeContainer() {
    return (
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
    )
}
