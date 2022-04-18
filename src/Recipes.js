import React from "react";


const Recipe = ({title,calories,image}) => {

    return(
        <div className="">
            <h1 className="reqName">{title}</h1>
            <p className="reqCal">{calories}</p>
            <img className="reqImg" src={image}/>

        </div>
    )
}


export default Recipe