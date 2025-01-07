import Header from "../components/Header.jsx";
import "../styles/CarpoolSearch.css";
import CarpoolEntry from "../components/CarpoolEntry.jsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const LIMIT = 10;

export default function CarpoolSearch() {
  const [carpools, setCarpools] = useState([]);
  const [carpoolsLoading, setCarpoolsLoading] = useState(false);

  const [bookmarks, setBookmarks] = useState([]);
  const [currentBookmark, setCurrentBookmark] = useState(0);

  const [searchParams] = useSearchParams();

  const previousPage = () => {
    if (currentBookmark >= 0) setCurrentBookmark(currentBookmark - 1);
  };

  const nextPage = () => {
    setCurrentBookmark(currentBookmark + 1);
  };

  useEffect(() => {
    const date = new Date(searchParams.get("date"));
    const SECONDS_IN_A_DAY = 86400;

    setCarpoolsLoading(true);

    fetch(`http://localhost:5984/blutt/_find`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: {
          from: {
            $eq: searchParams.get("from"),
          },
          to: {
            $eq: searchParams.get("to"),
          },
          date: {
            $gt: (date.getTime() / 1000).toString(),
            $lt: (date.getTime() / 1000 + 100 * SECONDS_IN_A_DAY).toString(),
          },
        },
        limit: LIMIT,
        bookmark: bookmarks[currentBookmark],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCarpoolsLoading(false);

        setCarpools(data.docs);
        if (currentBookmark === bookmarks.length - 1) {
          setBookmarks([...bookmarks, data.bookmark]);
        }
        window.scrollTo(0, 0);
      });
  }, [currentBookmark]);

  return (
    <div className="container">
      <Header />
      {carpoolsLoading ? (
        <div className="center-text">Chargement...</div>
      ) : carpools.length === 0 ? (
        <div className="center-text">Aucun résultat.</div>
      ) : (
        <div className="carpool-container">
          {carpools.map((carpool) => (
            <CarpoolEntry key={carpool.id} carpool={carpool} />
          ))}
        </div>
      )}
      <div className="page-selector">
        <button
          type="button"
          disabled={currentBookmark === 0}
          className="button"
          onClick={previousPage}
        >
          Précédent
        </button>
        <a onClick={nextPage} className={"current-page"}>
          {currentBookmark + 1}
        </a>
        <button
          disabled={false}
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
