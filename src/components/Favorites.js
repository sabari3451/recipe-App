import React from "react";
import RecipeCard from "./RecipeCard";

const Favorites = ({ favorites, onRemoveFavorite }) => {
    return (
        <div className="favorites">
            <h2>Favorites</h2>
            <div className="recipe-list">
                {favorites.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onFavorite={onRemoveFavorite}
                        isFavorite={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
