import './index.css'
import { useState } from 'react';
const Compteurs = () => {

    const [compteurs1, setcompteurs1] = useState(0);
    const [compteurs2, setcompteurs2] = useState(0);
    const total = compteurs1 + compteurs2
    return (
      
            
        <div className='CompteursContainer' >
            <h1>Les compteurs</h1>
                <div className="CompteursContainerbottom">
                    <p>Compteur 1:  </p>
         {
                compteurs1 < 10 ? (
                    <button
                        onClick={() => {
                            setcompteurs1(compteurs1 + 1)
                        }}
                    >+</button>
) : null
            }
               
                <div>{compteurs1}</div>
                <div className="box_compteur">
                {
                    compteurs1 > 0 && total < 18 ? (
                        <button
                            onClick={() => {
                                setcompteurs1(compteurs1 + 1)
                            }}
                        >-</button>
                    ) : null
                    }
                </div>
                </div>
                <div className="CompteursContainerbottom">
                    <p>Compteur 2:  </p>
                    {
                        compteurs2 < 10 && total  <18 ?  (
                            <button
                                onClick={() => {
                                    setcompteurs2(compteurs2 + 1)
                                }}
                            >+</button>
                        ) : null
                    }

                    <div>{compteurs2}</div>
                    {
                        compteurs2 > 0 ? (
                            <button
                                onClick={() => {
                                    setcompteurs2(compteurs2 - 1)
                                }}
                            >-</button>
                        ) : null
                    }
            </div>
            
            
            
            <div>
                <p>Total:</p>
                <span>{total}</span>
            </div>
                
            </div>
      
)
}

export default Compteurs