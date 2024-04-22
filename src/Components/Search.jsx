import React, { useEffect, useState } from "react";
import Styles from "./Search.module.css";
const API_KEY = "8ac9bec717fab1e40981c51261a1b079";
const APP_ID = "2210d63e";
const BASE_URL = "https://api.edamam.com/api/recipes/v2";

const App = ({ recipes, setRecipes }) => {
  const [searchText, setSearchText] = useState("pizza");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}?type=public&app_id=${APP_ID}&app_key=${API_KEY}&q=${searchText}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data.hits) {
          setRecipes(data.hits.map((hit) => hit.recipe));
          setError(null);
        } else {
          setError("Received data format is unexpected");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchRecipes();
  }, [searchText]);

  return (
    <div className={Styles.searchCont}>
      <input
        className={Styles.search}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search recipes..."
      />
      {error && <p>{error}</p>}{" "}
    </div>
  );
};

export default App;
