import React from "react";

export default function Chatprofile(props){
    return (
        <div>
            <img src={props.img} alt="profile" style={
                {
                    width:"3.5vw",
                    height:"3.5vw",
                    border: 'solid 2px red',
                    borderRadius:"50%"
                }
            }/>
        </div>
    )
}