import React from "react"

export default function Mission (props) {
    return (
        <div className="missionCard">     
           <div className="mission--title">
                {props.missionTitle}
            </div>
            <div className="mission--description">
                {props.missionDescription}
            </div>
        </div>
    )
}
