import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";
import "../styles/CarpoolSearch.css";
import CarpoolEntry from "../components/CarpoolEntry.jsx";
import {useEffect, useState} from "react";

export default function CarpoolSearch() {
  const [carpools, setCarpools] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5984/blutt/_all_docs?include_docs=true`)
      .then(res => res.json())
      .then(data => {
        setCarpools(data.rows)
      })
  }, []);

  return (
    <div className="container">
      <Header/>
      <Link to="/">
        <button type="button" className="button">
          Retour
        </button>
      </Link>
      <div className="carpool-container">
        {carpools.map((carpool) => (
          <CarpoolEntry key={carpool.id} carpool={carpool.doc}/>
        ))}
      </div>
    </div>
  );
}
