import React from "react";
import "./PaymentsList.css";
import PaymentItem from "./PaymentItem";

function PaymentsList() {
    const [payments, setPayments] = React.useState([
        {
            id: 1,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Reconciled",
        },

        {
            id: 2,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Pending",
        },

        {
            id: 3,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Reconciled",
        },

        {
            id: 4,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Reconciled",
        },

        {
            id: 5,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Pending",
        },

        {
            id: 6,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Unreconciled",
        },

        {
            id: 7,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Reconciled",
        },

        {
            id: 8,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Unreconciled",
        },

        {
            id: 9,
            name: 'Apple Mack Book 15" 250 SSD 12GB',
            price: "$73430",
            transactionNo: 123456789,
            time: "12:30",
            status: "Pending",
        },
    ]);

    return (
        <table className="payment-list">
            <thead className="payment-list__header">
                <tr>
                    <th>Item Type</th>
                    <th>Price</th>
                    <th>Transaction No</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="payment-list__body">
                {payments.map((payment) => {
                    return <PaymentItem key={payment.id} payment={payment} />;
                })}
            </tbody>
        </table>
    );
}

export default PaymentsList;
