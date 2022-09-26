import './index.css'
import { useState } from 'react'

const Configurateur = () => {

    
    const [choice, setchoice] = useState(null);
    const [choice2, setchoice2] = useState(null);
    const [velo, setvelo] = useState(0);
    const [sell , setsell] = useState(0)
    const veloville = 500
    const mountain = 700
    const sell1 = 20 
    const sell2 = 80
   
    
    return (
        <div className="container-confi">
            <div className=" section-confi confivelo">
                <h1>Configure ton vélo</h1>
            </div>
            <div className='section-confi' >
            <div className="confivelo">
                    <h1>1 - Choisis un modèle</h1>
            </div>
                <div className="typevelo">
                    <p onClick={() => {
                        setchoice("produit1")
                        setvelo( ( veloville  ))
                    }}
                        className={choice === "produit1" ? "selGreen" : "selnormal"}
                    >Vélo de ville({veloville} Eur)</p>
                    <p onClick={() => {
                        setchoice("produit2")
                        setvelo(mountain)
                    }}
                        className={choice === "produit2" ? "selGreen" : "selnormal"}
                    >Mountain Bike ({mountain}Eur)</p>
                </div>
            </div>
            <div className='section-confi' >
                <div className="confivelo">
                    <h1>2 - Choisis ta selle</h1>
                </div>
                <div className="typevelo">
                    <p
                        onClick={() => {
                            setchoice2("type1")
                            setsell(sell1)
                        }} 
                        className={choice2 === "type1" ? "selGreen" : "selnormal"}                        
                    >Classique({sell1} Eur)</p>
                    <p
                        onClick={() => {
                            setchoice2("type2")
                            setsell(sell2)
                        }} 
                        className={choice2 === "type2" ? "selGreen" : "selnormal"}
                    >Sur suspension ({sell2} Eur)</p>
                </div>
            </div>
            <div className=" section-confi confivelo">
                <h1>Prix Final {velo + sell} </h1>
            </div>
            
        </div>
)
    
}

export default Configurateur