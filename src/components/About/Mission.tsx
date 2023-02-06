import React from "react"
type Props = {
    missionTitle: string,
    missionDescription: string,
}

export default function Mission ({missionTitle, missionDescription}:Props){
    return (
        <>
        {/* {props.isLeftData === true &&  */}
        <div className="missionCard">     
           <div className="mission--title">
                {missionTitle}
            </div>
            <div className="mission--description">
                {missionDescription}
            </div>
        </div>
        {/* } */}
        </>
    )
}
