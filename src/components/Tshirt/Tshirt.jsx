import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt }) => {
    // console.log(tshirt);
    const { _id, name, picture, index, price, gender } = tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture ? picture : 'Uploading...'} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{gender ? gender : 'Uploading...'}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Tshirt;