import React from "react";
function Expe(props){

    return(
        
        <div>
            
            <ul>
               
                <li>{props.exp.year}--{props.exp.role}---{props.exp.company}</li>
            </ul>
        </div>
    )
}
export default Expe;