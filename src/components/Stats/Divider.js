import React from "react";
import "./Divider.css";

function Divider() {
    return <progress className="divider" max={100} value={80} />;
}

export default Divider;
