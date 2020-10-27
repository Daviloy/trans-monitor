import React from "react";
import "./NavLinks.css";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import { Avatar } from "@material-ui/core";
import person from "../../assets/person.jpg";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

function NavLinks() {
    return (
        <ul className="navlinks">
            <li>
                <a href="#">Support</a>
            </li>
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">
                    <IconButton>
                        <Badge
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            badgeContent={100}
                            color="primary"
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </a>
            </li>
            <li>
                <h3>
                    Hello <br /> <span>Oluwaleke Ojo</span>
                </h3>
                <Avatar src={person} alt="Oluwaleke Ojo" />
            </li>
        </ul>
    );
}

export default NavLinks;
