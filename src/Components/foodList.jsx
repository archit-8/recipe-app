import FoodItem from "./foodItem";

export default function FoodList({ recipes, setRecipeLabel }) {
  return (
    <div>
      <ul>
        {recipes.map((recipe, index) => (
          <FoodItem
            setRecipeLabel={setRecipeLabel}
            key={recipe}
            recipe={recipe}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
