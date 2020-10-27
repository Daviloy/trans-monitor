import React from "react";
import "./StatsItem.css";
import Divider from "./Divider";

function StatsItem(props) {
    const {
        type,
        title,
        pendingOrders,
        reconciledOrders,
        totalOrders,
        unreconciledPayments,
        reconciledPayments,
        totalPayments,
    } = props.data;

    return (
        <div
            className="stats-item"
            style={type === "payments" ? { marginTop: 5 } : null}
        >
            <h3>{title}</h3>
            <Divider />
            {type === "orders" ? (
                <React.Fragment>
                    <ul>
                        <li>
                            Pending Orders: &nbsp;
                            <span
                                style={{
                                    color: "rgb(255, 127, 80)",
                                    fontWeight: "bold",
                                }}
                            >
                                {pendingOrders}
                            </span>
                        </li>
                        <li>
                            Reconciled Orders: &nbsp;
                            <span
                                style={{ color: "#5cb85c", fontWeight: "bold" }}
                            >
                                {reconciledOrders}
                            </span>
                        </li>
                        <li>
                            Total Orders: &nbsp;
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                                {totalOrders}
                            </span>
                        </li>
                    </ul>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <ul>
                        <li>
                            Unreconciled Payments: &nbsp;
                            <span
                                style={{
                                    color: "rgb(255, 127, 80)",
                                    fontWeight: "bold",
                                }}
                            >
                                {unreconciledPayments}
                            </span>
                        </li>
                        <li>
                            Reconciled Payments: &nbsp;
                            <span
                                style={{ color: "#5cb85c", fontWeight: "bold" }}
                            >
                                {reconciledPayments}
                            </span>
                        </li>
                        <li>
                            Total Payments: &nbsp;
                            <span style={{ color: "blue", fontWeight: "bold" }}>
                                {totalPayments}
                            </span>
                        </li>
                    </ul>
                </React.Fragment>
            )}
        </div>
    );
}

export default StatsItem;
