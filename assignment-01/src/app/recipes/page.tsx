import React from 'react';
import styles from '@/app/styles/modules/Recipes.module.css';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const recipesData2 = [
  {
    name: "Vegetarian Lasagna",
    ingredients: ["Lasagna noodles", "Ricotta cheese", "Spinach", "Marinara sauce", "Mozzarella cheese"],
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "Layer lasagna noodles, ricotta cheese, spinach, and marinara sauce in a baking dish.",
      "Top with mozzarella cheese.",
      "Cover with foil and bake for 30 minutes, then remove foil and bake for an additional 10 minutes."
    ],
    imageUrl: "/images/vegetarian-lasagna.jpg"
  },
  {
    name: "Chicken Alfredo",
    ingredients: ["Fettuccine", "Chicken breast", "Heavy cream", "Parmesan cheese", "Garlic"],
    steps: [
      "Cook fettuccine according to package instructions.",
      "In a pan, cook chicken breast until golden.",
      "Add garlic and heavy cream; simmer.",
      "Stir in Parmesan cheese until melted, then toss with fettuccine."
    ],
    imageUrl: "/images/chicken-alfredo.jpg"
  },
  {
    name: "Beef Tacos",
    ingredients: ["Ground beef", "Taco seasoning", "Taco shells", "Lettuce", "Tomato", "Cheddar cheese"],
    steps: [
      "Brown the ground beef in a skillet.",
      "Add taco seasoning and water; simmer until thickened.",
      "Fill taco shells with beef, lettuce, tomato, and cheese."
    ],
    imageUrl: "/images/beef-tacos.jpg"
  },
  {
    name: "Mushroom Risotto",
    ingredients: ["Arborio rice", "Mushrooms", "Vegetable broth", "Onion", "Parmesan cheese"],
    steps: [
      "Sauté onion and mushrooms in a pot.",
      "Add Arborio rice and stir for 1-2 minutes.",
      "Gradually add vegetable broth, stirring until absorbed.",
      "Finish with Parmesan cheese."
    ],
    imageUrl: "/images/mushroom-risotto.jpg"
  },
  {
    name: "Pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Baking powder", "Sugar"],
    steps: [
      "In a bowl, mix flour, baking powder, and sugar.",
      "In another bowl, whisk eggs and milk.",
      "Combine both mixtures and stir until smooth.",
      "Cook on a griddle until bubbles form, then flip."
    ],
    imageUrl: "/images/pancake.jpg"
  },
  {
    name: "Fruit Salad",
    ingredients: ["Mixed fruits", "Honey", "Lemon juice", "Mint leaves"],
    steps: [
      "Chop mixed fruits into bite-sized pieces.",
      "In a bowl, combine fruits with honey and lemon juice.",
      "Toss gently and garnish with mint leaves before serving."
    ],
    imageUrl: "/images/fruit-salad.jpg"
  },
];

export default function Recipes2() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Tasty Recipes for Every Craving</h1>
        {recipesData2.map((recipe, index) => (
          <div key={index} className={styles.recipeCard}>
            <img src={recipe.imageUrl} alt={recipe.name} className={styles.recipeImage} />
            <h2 className={styles.recipeName}>{recipe.name}</h2>
            <h3 className={styles.subheading}>Ingredients:</h3>
            <ul className={styles.ingredientsList}>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className={styles.ingredientItem}>{ingredient}</li>
              ))}
            </ul>
            <h3 className={styles.subheading}>Steps:</h3>
            <ol className={styles.stepsList}>
              {recipe.steps.map((step, i) => (
                <li key={i} className={styles.stepItem}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
