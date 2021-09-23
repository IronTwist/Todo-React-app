import React from "react";

const Filter = ({selectedFilter}) => (
        <>
            <h5>Show:</h5>
            <div className="filter">
            <input
                id="all"
                type="radio"
                name="filter"
                value="all"
                defaultChecked={true}
                onChange={(elem) => selectedFilter(elem.target.value)}
            /> All items</div>
            <div className="filter">
            <input
                type="radio"
                name="filter"
                value="allCompleted"
                onChange={(elem) => selectedFilter(elem.target.value)}
            /> Completed tasks</div>
            <div className="filter">
            <input
                type="radio"
                name="filter"
                value="allUncompleted"
                onChange={(elem) => selectedFilter(elem.target.value)}
            /> Uncompleted tasks </div>
        </>
 );

export default Filter;