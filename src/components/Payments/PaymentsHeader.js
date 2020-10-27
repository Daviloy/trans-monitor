import React from "react";
import "./PaymentsHeader.css";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Search from "../Search/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function PaymentsHeader() {
    const [selectedFilter, setSelectedFilter] = React.useState("All");

    const filterPayments = (event) => {
        setSelectedFilter(event.target.value);
    };

    return (
        <header className="payments-header">
            <p style={{ flex: 0.4 }}>
                Showing 20 <KeyboardArrowDown /> out of 500 payments
            </p>

            <Search paymentSearch style={{ flex: 0.5 }} />

            <div className="payments-header__filter" style={{ flex: 0.1 }}>
                <p>Show</p>
                <Select
                    labelId="label"
                    id="select"
                    variant="outlined"
                    onClick={filterPayments}
                    value={selectedFilter}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Reconciled">Reconciled</MenuItem>
                    <MenuItem value="Un-reconciled">Un-reconciled</MenuItem>
                    <MenuItem value="Settled">Settled</MenuItem>
                    <MenuItem value="Un-Settled">UnSettled</MenuItem>
                </Select>
            </div>
        </header>
    );
}

export default PaymentsHeader;
