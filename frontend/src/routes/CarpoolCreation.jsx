import { Link } from "react-router-dom";
import Header from "../components/Header";
import CarpoolInfoForm from "../components/CarpoolInfoForm";
import { useState } from "react";

export default function CarpoolerHome() {
  const [carpoolCreated, setCarpoolCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
  
    console.log(formJSON);

    fetch("http://localhost:5984/blutt", {
      method: form.method,
      body: JSON.stringify(formJSON),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => setCarpoolCreated(true));
  };

  return (
    <>
      <Header />
      <div className="home-container">
        {carpoolCreated ? (
          <h2>Trajet créé avec succès !</h2>
        ) : (
          <>
            <h2>Entrez les données de votre trajet</h2>
            <CarpoolInfoForm create={true} onSubmit={handleSubmit} />
          </>
        )}
      </div>
      <Link to="/">
        <button type="button" className="button">
          Switch profile
        </button>
      </Link>
    </>
  );
}
