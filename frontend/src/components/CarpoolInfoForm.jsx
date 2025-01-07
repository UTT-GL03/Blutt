import "../styles/CarpoolInfoForm.css";

export default function CarpoolInfoForm({ create = false, onSubmit }) {
  return (
    <form className="form" method="post" onSubmit={(e) => onSubmit(e)}>
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="from">De:</label>
          <input type="text" name="from" id="from" />
        </div>
        <div className="input-container">
          <label htmlFor="to">A:</label>
          <input type="text" name="to" id="to" />
        </div>
        <div className="input-container">
          <label htmlFor="to">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        {create && (
          <>
            <div className="input-container">
              <label htmlFor="price">Prix (en euros):</label>
              <input type="number" id="price" name="price" min={0} />
            </div>
            <div className="input-container">
              <label htmlFor="availablePlaces">
                Nombre de places disponibles:
              </label>
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
      </div>
      <button className="button" type="submit">
        {create ? "Submit" : "Search"}
      </button>
    </form>
  );
}
