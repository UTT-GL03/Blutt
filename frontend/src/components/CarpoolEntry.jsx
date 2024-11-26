import "../styles/CarpoolSearch.css";

export default function CarpoolEntry({ carpool }) {
  const date = new Date(carpool.date);
  const formattedDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  const formattedHour = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="carpool-entry-container">
      <div className="price">{parseFloat(carpool.price).toFixed(2)}€</div>
      <div className="carpool-info-container">
        <div className="name">{carpool.carpooler.name}</div>
        <div>
          Départ de {carpool.from} pour aller à {carpool.to} le {formattedDate}{" "}
          à {formattedHour}
        </div>
        <div>{carpool.availableSpots} places disponibles</div>
      </div>
      <button className="book-button" type="button">
        Réserver
      </button>
    </div>
  );
}
