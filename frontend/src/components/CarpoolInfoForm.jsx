import "../styles/CarpoolInfoForm.css";

export default function CarpoolInfoForm({ create = false }) {
  return (
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
      {create && (
        <>
          <div className="input-container">
            <label htmlFor="destination2">Prix (en euros):</label>
            <input type="number" id="price" name="price" min={0} />
          </div>
          <div className="input-container">
            <label htmlFor="destination2">Nombre de places disponibles:</label>
            <input
              type="number"
              id="availablePlaces"
              name="availablePlaces"
              min="1"
              max="3"
            />
          </div>
        </>
      )}
    </form>
  );
}
