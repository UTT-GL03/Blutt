import { Link } from "react-router-dom";
import "../styles/CarpoolerHome.css";
import Header from "../components/Header";

export default function CarpoolerHome() {
  return (
    <>
    <Header />
    <div className="home-container">
        <h2>Entrez les données de votre trajet</h2>
        <form className="form_conducteur">
          <label htmlFor="destination1">De:</label>
          <input type="text" name="destination1" id="destination1" />
          <label htmlFor="destination2">A:</label>
          <input type="text" name="destination2" id="destination2" />
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" /><br></br>
          <label htmlFor="price">Prix( en euros):</label>
          <input type="number" id="price" name="price" min="0"/><br></br>
          <label htmlFor="price">Nombre de places disponibles:</label>
          <input type="number" id="availablePlaces" name="availablePlaces" min="1" max="3"/><br></br>

        </form>
        <button type="submit" className="button">Submit</button><br></br>
      </div>
      <Link to="/">
      <button type="button" className="button">
        Switch profile
      </button>
      <br></br>
      </Link>
    </>
    
  )
}