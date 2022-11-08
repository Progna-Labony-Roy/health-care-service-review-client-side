import React from 'react';
import Footer from '../../Others/Footer/Footer';
import Services from '../../Others/Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold italic text-cyan-400 my-8 flex justify-center'>We're Glad You Found Us</h1>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;