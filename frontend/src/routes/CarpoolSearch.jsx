import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/CarpoolSearch.css";
import CarpoolEntry from "../components/CarpoolEntry.jsx";
import { useEffect, useState } from "react";

const LIMIT = 10;

export default function CarpoolSearch() {
  const [carpools, setCarpools] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxItems, setMaxItems] = useState();

  const previousPage = () => {
    if (currentPage !== 0) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    console.log("HELLO");
    fetch(
      `http://localhost:5984/blutt/_all_docs?include_docs=true&limit=${LIMIT}&skip=${(currentPage - 1) * LIMIT}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCarpools(data.rows);
        setMaxItems(data.total_rows);
        window.scrollTo(0, 0);
      });
  }, [currentPage]);

  return (
    <div className="container">
      <Header />
      <div className="carpool-container">
        {carpools.map((carpool) => (
          <CarpoolEntry key={carpool.id} carpool={carpool.doc} />
        ))}
      </div>
      <div className="page-selector">
        <button
          type="button"
          disabled={currentPage === 1}
          className="button"
          onClick={previousPage}
        >
          Précédent
        </button>
        <a onClick={nextPage} className={"current-page"}>
          {currentPage}
        </a>
        <button
          disabled={currentPage * LIMIT >= maxItems}
          type="button"
          className="button"
          onClick={nextPage}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
