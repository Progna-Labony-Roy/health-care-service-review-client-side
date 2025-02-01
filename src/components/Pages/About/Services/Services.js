import React, { useEffect, useState } from 'react';
import Card from '../../../Others/Card/Card';
import 'react-photo-view/dist/react-photo-view.css';


const Services = ({limit}) => {
    const [services, setServices]=useState([]);

    useEffect( ()=>{
        fetch(`http://localhost:5000/services?limit=${limit || 100}`)
        .then( res => res.json())
        .then( data =>{
            setServices(data)
        })
    },[])

    

    return (
        <div className='mt-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 my-10'>
                <div className=''>
                    <p className='text-[#307BC4] text-xl'>SERVICES</p>
                    <h3 className='text-[#274760] text-4xl font-semibold lg:mr-12'>Provides Our Best Services</h3>
                </div>
            {
                services.map(service => <Card key={service._id} service={service}></Card>)
            }
        </div>
        </div>
    );
};

export default Services;