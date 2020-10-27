import React from "react";
import "./Transaction.css";

function Transaction(props) {
    const { label, volume, value } = props.data;

    return (
        <div className="transaction">
            <div className="transaction__text">
                <h3>{label}</h3>
                <h4>{volume ? volume : value}</h4>
            </div>
        </div>
    );
}

export default Transaction;
