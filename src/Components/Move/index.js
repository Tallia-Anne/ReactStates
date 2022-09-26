import "./move.css";

import { useState } from "react";

const Movers = () => {
    const [distanceX, setDistanceX] = useState(0);
    const [distanceY, setDistanceY] = useState(0);
    

    return (
        <div className="moversContainer">
            <div className="buttons-direction">
            {/* droite */}
            
            <div>
            <button
                onClick={() => {
                    console.log("clic");
                    setDistanceX(distanceX + 10);
                }}
            >
                        {"▶️"} 
                </button>
            </div>
            
            {/* gauche */}
                <div>
                    
            <button
                onClick={() => {
                  
                    setDistanceX(distanceX - 10);
                }}
            >
                        {"◀️"}
                </button>
            </div>
            
            {/* bas */}
            <div>
            <button
                onClick={() => {
                  
                    setDistanceY(distanceY + 10);
                }}
            >
                        {"🔽"}  
                </button>
            </div>
            
            
            
            {/* haut */}
            <div>
                <button
                    onClick={() => {
                       
                        setDistanceY(distanceY - 10);
                    }}
                >
                        {"🔼"}  
                </button>
                </div>
               
               
            </div>
            <div
                className="square"
                style={{ transform: `translate(${distanceX}px,${distanceY}px)`,  }}
               
                
                
            ></div>
        </div>
    );
};

export default Movers;