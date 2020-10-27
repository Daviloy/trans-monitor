import React from "react";
import "./Stats.css";
import StatsItem from "./StatsItem";

function Stats() {
    const STATS_DATA = [
        {
            id: 1,
            type: "orders",
            title: "Orders",
            pendingOrders: 20,
            reconciledOrders: 80,
            totalOrders: 100,
        },
        {
            id: 2,
            type: "payments",
            title: "Payments",
            unreconciledPayments: 20,
            reconciledPayments: 80,
            totalPayments: 100,
        },
    ];

    return (
        <div className="stats">
            {STATS_DATA.map((data) => (
                <StatsItem key={data.id} data={data} />
            ))}
        </div>
    );
}

export default Stats;
