import React from "react";

const RecipeCard = ({ recipe, onFavorite, isFavorite }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <button onClick={() => onFavorite(recipe)}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
};

export default RecipeCard;
