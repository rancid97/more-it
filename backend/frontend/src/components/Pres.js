import React from 'react';
import {Link} from "react-router-dom";

const Pres = ({currentService}) => {
    return (
        <>
            <h5>{currentService && currentService.name}</h5>
            <p>
                {currentService && currentService.shortDescription}
            </p>
            <button>
                <Link id='pres-link' to={`/uslugi/${currentService && currentService.name}`}>Czytaj więcej</Link>
            </button>
        </>
    )
}



export default Pres;
