import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search(props) {
    return (
        <div className="search">
            <SearchIcon className="search__icon" />
            <input
                type="text"
                placeholder="Search..."
                className={`search__input ${
                    props.paymentSearch ? "payment-search" : null
                } `}
            />
        </div>
    );
}

export default Search;
