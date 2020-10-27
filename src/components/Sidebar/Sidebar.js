import React from "react";
import "./Sidebar.css";
import Button from "@material-ui/core/Button";
import SidebarItem from "../SidebarItem/SidebarItem";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import ReceiptIcon from "@material-ui/icons/ReceiptOutlined";
import AdjustIcon from "@material-ui/icons/Adjust";
import AssignmentIcon from "@material-ui/icons/AssignmentIndOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import PaymentIcon from "@material-ui/icons/Payment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SnoozeIcon from "@material-ui/icons/Snooze";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__button">
                <Button
                    className="sidebar__button"
                    variant="contained"
                    size="large"
                >
                    Generate Invoice
                </Button>
            </div>

            {/* Main Section */}
            <div className="sidebar__main">
                <h3>Main</h3>

                <SidebarItem
                    Icon={DashboardIcon}
                    text="Overview"
                    active={true}
                />
            </div>

            {/* Payments Section */}
            <div className="sidebar__payments">
                <h3>Payments</h3>

                <SidebarItem Icon={PaymentIcon} text="All Payments" />
                <SidebarItem Icon={AttachMoneyIcon} text="Reconciled Payments" />
                <SidebarItem
                    Icon={MoneyOffIcon}
                    text="Un - Reconciled Payments"
                />
                <SidebarItem Icon={AdjustIcon} text="Manual Settlement" />
            </div>

            {/* Orders Section */}
            <div className="sidebar__orders">
                <h3>Orders</h3>

                <SidebarItem Icon={SubscriptionsIcon} text="All Orders" />
                <SidebarItem Icon={SnoozeIcon} text="Pending Orders" />
                <SidebarItem Icon={AssignmentTurnedInIcon} text="Reconciled Orders" />
                <SidebarItem Icon={PersonIcon} text="Merchant Profile" />
            </div>
        </div>
    );
}

export default Sidebar;
