import "./App.css";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="accueil_client">
      <h2>Selectionnez votre trajet:</h2>
      <form className="form_client">
      <label for="destination1">De:</label> 
      <input type="text" name="destination1" id="destination1" /> 
      <label for="destination2">A:</label> 
      <input type="text" name="destination2" id="destination2" /> 
      <label for="destination2">Date:</label> 
      <input type="date" id="date" name="date"/><br></br>
    </form>
    <button type="submit">Search</button><br></br>
    </div>
    </>
  );
}
