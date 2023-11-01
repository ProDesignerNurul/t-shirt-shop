import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';



const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts)


    return (
        <div>
            <h2>this is home page</h2>
            <div className='tshirt-container'>
                {
                    tshirts.map( tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>
        </div>
    );
};

export default Home;