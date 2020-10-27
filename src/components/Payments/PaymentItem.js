import React from "react";
import "./PaymentItem.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

function PaymentItem(props) {
    const { name, price, transactionNo, time, status } = props.payment;

    return (
        <tr className="payment-item">
            <td className="payment-item__type">
                <Avatar src="" alt={name} />
                <p className="payment-item__name">{name}</p>
            </td>
            <td className="payment-item__price">
                <p>{price}</p>
            </td>
            <td className="payment-item__transaction-no">
                <p>{transactionNo}</p>
            </td>
            <td className="payment-item__time">
                <p>{time}</p>
            </td>
            <td className="payment-item__status">
                <Button variant="outlined">{status}</Button>
            </td>
            <td className="payment-item__change-status">
                <KeyboardArrowDown />
            </td>
        </tr>
    );
}

export default PaymentItem;
