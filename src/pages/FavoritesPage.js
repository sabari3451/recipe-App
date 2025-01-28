import React from "react";
import RecipeList from "../components/RecipeList";

const FavoritesPage = ({ favorites, onRemoveFavorite }) => {
    return (
        <div className="favorites-page">
            <h2>Your Favorite Recipes</h2>
            {favorites.length === 0 ? (
                <p>No favorite recipes added yet!</p>
            ) : (
                <RecipeList
                    recipes={favorites}
                    onFavorite={onRemoveFavorite}
                    favorites={favorites}
                />
            )}
        </div>
    );
};

export default FavoritesPage;
