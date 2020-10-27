import React from "react";
import "./MainContent.css";
import Transactions from "../Transactions/Transactions";
import Charts from "../Chart/Chart";
import Stats from "../Stats/Stats";
import Payments from "../Payments/Payments";

function MainContent() {
    return (
        <div className="main-content">
            <Transactions />
            <div className="main-content__data">
                <Charts />
                <Stats />
            </div>

            {/* Payments */}
            <Payments />
        </div>
    );
}

export default MainContent;
