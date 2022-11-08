import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    const [services, setServices]=useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then( data =>{
            setServices(data)
        })
    },[])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {
                services.map(service => <Card key={service._id} service={service}></Card>)
            }
        </div>
        </div>
    );
};

export default Services;