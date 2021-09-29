import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfo } from '@fortawesome/free-solid-svg-icons';
import './Single.css'

const Single = (props) => {
    const { name, img, population, primeMinister, president, capital } = props.single;
    // const element = <FontAwesomeIcon icon={faInfo} />

    return (
        <div className="single col-md-4 justify-content-center bg-dark">
            <img src={img} alt="" className="pt-4" />
            <h3 className="text-center text-light">Name : {name}</h3>
            <h5 className="text-center text-light">Prime Minister : {primeMinister}</h5>
            <p className="text-center text-light">Population : {population} m</p>
            <h5 className="text-center text-light">President : {president}</h5>
            <h6 className="text-center text-light">Capital : {capital}</h6>
            <button
                className="btn btn-danger button text-light "
                onClick={() => props.handleButton(props.single)}
            > <i class="fas fa-info-circle"></i> See Information</button>
        </div>
        




    );
};

export default Single;