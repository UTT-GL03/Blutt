import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Global.css";
import Header from "../components/Header.jsx";
import CarpoolInfoForm from "../components/CarpoolInfoForm.jsx";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formJSON = Object.fromEntries(formData.entries());

    navigate(
      `/carpool-search?from=${formJSON.from}&to=${formJSON.to}&date=${formJSON.date}`,
    );
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <h2>Sélectionnez votre trajet:</h2>
        <CarpoolInfoForm onSubmit={handleSubmit} />
      </div>
      <Link to="carpool-creation">
        <button type="button" className="button">
          Switch profile
        </button>
      </Link>
    </>
  );
}
