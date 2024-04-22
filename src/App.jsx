import Search from "./Components/Search";
import React, { useEffect, useState } from "react";
import FoodList from "./Components/foodList";
import Nav from "./Components/nav";
import Styles from "./Components/App.module.css";
import Container from "./Components/container";
import InnerContainer from "./Components/innerContainer";
import FoodDetails from "./Components/FoodDetails";
function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeLabel, setRecipeLabel] = useState("");
  return (
    <div className={Styles}>
      <Nav />
      <Search recipes={recipes} setRecipes={setRecipes} />
      <Container>
        <InnerContainer>
          <FoodList setRecipeId={setRecipeLabel} recipes={recipes} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails recipeLabel={recipeLabel} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
