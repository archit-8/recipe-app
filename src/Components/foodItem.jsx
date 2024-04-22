import Styles from "./foodItem.module.css";
export default function FoodItem({ recipe, setRecipeLabel }) {
  return (
    <div className={Styles.item}>
      <img className={Styles.image} src={recipe.image} alt="" />
      <div className={Styles.itemtext}>
        <p className={Styles.itemName}>{recipe.label}</p>
      </div>
      <div className={Styles.buttons}>
        <button
          onClick={() => {
            setRecipeLabel(recipe.label);
          }}
          className={Styles.buttonItem}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}
