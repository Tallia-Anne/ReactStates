import './index.css'

import { useState } from 'react'

const Selecteur = () => {
    
    const [choice, setchoice] = useState(null); 
    
    return (
       <>
        <div className="selContainer">
            
            
            
            <div onClick={() => {
                setchoice("square1")
            }}
                className={choice === "square1" ? "selGreen" : "selOrange"}></div>
            
            
            <div onClick={() => {
                setchoice("square2")
            }}
                className={choice === "square2" ? "selGreen" : "selOrange"}></div>
            
            
            <div onClick={() => {
                setchoice("square3")
            }}
                className={choice === "square3" ? "selGreen" : "selOrange"}></div>
            
            
            
            
            </div>
            <hr />
            <div className="selContainerrondeimage">



                <div onClick={() => {
                    setchoice("circle1")
                }}
                    className={choice === "circle1" ? "selcircleImage1" : "selcircleOrange" }></div>
                <div onClick={() => {
                    setchoice("circle2")
                }}
                    className={choice === "circle2" ? "selcircleImage2" : "selcircleOrange" }></div>
                <div onClick={() => {
                    setchoice("circle3")
                }}
                    className={choice === "circle3" ? "selcircleImage3" : "selcircleOrange"}></div>


               




            </div>
        </>
       
)
}

export default Selecteur