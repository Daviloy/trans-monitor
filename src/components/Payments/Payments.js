import React from "react";
import "./Payments.css";
import PaymentsList from "./PaymentsList";

function Payments() {
    return (
        <div className="payments">
			<h2 className="payments__title">Payments</h2>
            <PaymentsList />
        </div>
    );
}

export default Payments;
