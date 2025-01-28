import axios from "axios";

// Hard-coded API Key (Replace with your valid key)
const API_KEY = "b8766df8f4ae4acb8c73565dc1936ef3";

export const fetchRecipes = async (query = "chicken", mealType = "") => {
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch`,
            {
                params: {
                    query: query, // Search term
                    type: mealType, // e.g., breakfast, lunch, dinner
                    number: 10, // Number of recipes to fetch
                    apiKey: API_KEY, // Spoonacular API Key
                },
            }
        );

        // Log response data for debugging
        console.log("API Response:", response.data);

        return response.data.results; // Return recipes
    } catch (error) {
        // Log error for debugging
        console.error("Error fetching recipes:", error.response || error);
        return [];
    }
};
