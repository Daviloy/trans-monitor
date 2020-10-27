import React from "react";
import './Transactions.css';
import Transaction from './Transaction';

function Transactions() {
    const TRANSACTION_DATA = [
        {
            id: 1,
            label: "Daily Transaction Volume",
            volume: "2342",
        },

        {
            id: 2,
            label: "Daily Transaction Value",
            value: "4,000.00",
        },

        {
            id: 3,
            label: "Total Transaction Volume",
            volume: "452,000",
        },

        {
            id: 4,
            label: "Total Transaction Value",
            value: "4,000.00",
        },
    ];

    return (
        <div className="transactions">
            {TRANSACTION_DATA.map((data) => (
                <Transaction key={data.id} data={data} />
            ))}
        </div>
    );
}

export default Transactions;
