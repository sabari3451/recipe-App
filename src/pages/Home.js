import React, { useState, useEffect } from "react";
import { fetchRecipes } from "../api";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import RecipeList from "../components/RecipeList";

const Home = ({ onFavorite, favorites }) => {
    const [recipes, setRecipes] = useState([]);
    const [mealType, setMealType] = useState("");

    useEffect(() => {
        fetchRecipes("chicken", mealType).then(setRecipes);
    }, [mealType]);

    const handleSearch = (query) => {
        fetchRecipes(query, mealType).then(setRecipes);
    };

    return (
        <div className="home">
            <SearchBar onSearch={handleSearch} />
            <FilterBar onFilter={setMealType} />
            <RecipeList
                recipes={recipes}
                onFavorite={onFavorite}
                favorites={favorites}
            />
        </div>
    );
};

export default Home;
