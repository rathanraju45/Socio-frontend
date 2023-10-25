import React from "react";
import Icon from "./Icon";


export default function Sidenav(props){

    const isHovered = props.hovered;
    const display = isHovered ? 'block' : 'none';

    return (
        <div className="Side-nav" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <Icon icon="Home" display={display} />
            <Icon icon="Search" display={display} />
            <Icon icon="Explore" display={display} />
            <Icon icon="Chat" display={display} />
            <div className="customise">
                <Icon icon="Colors" display={display}/>
            </div>
        </div>
    )
}
