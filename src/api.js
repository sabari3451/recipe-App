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
                    type: mealType, // Meal type filter
                    number: 12, // Number of recipes to fetch
                    apiKey: API_KEY, // Spoonacular API Key
                },
            }
        );

        console.log("API Response:", response.data);
        return response.data.results; // Return recipes
    } catch (error) {
        console.error(
            "Error fetching recipes:",
            error.response?.data || error.message
        );
        return [];
    }
};
