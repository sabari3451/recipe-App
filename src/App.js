import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
    const [favorites, setFavorites] = useState(() => {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const handleFavorite = (recipe) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((fav) => fav.id === recipe.id)) {
                return prevFavorites.filter((fav) => fav.id !== recipe.id);
            } else {
                return [...prevFavorites, recipe];
            }
        });
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            onFavorite={handleFavorite}
                            favorites={favorites}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <FavoritesPage
                            favorites={favorites}
                            onRemoveFavorite={handleFavorite}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
