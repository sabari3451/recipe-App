import React from "react";

const FilterBar = ({ onFilter }) => {
    const mealTypes = ["breakfast", "lunch", "dinner"];

    return (
        <div className="filter-bar">
            {mealTypes.map((type) => (
                <button key={type} onClick={() => onFilter(type)}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
