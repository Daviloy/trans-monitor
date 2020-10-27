import React from "react";
import "./SidebarItem.css";

function SidebarItem({ Icon, text, active }) {
    return (
        <div className={`sidebar-item ${active ? "sidebar-item-active" : ""}`}>
            <Icon className="sidebar-item__icon" />
            <p>{text}</p>
        </div>
    );
}

export default SidebarItem;
