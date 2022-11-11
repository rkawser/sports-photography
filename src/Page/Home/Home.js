import React from 'react';
import PageTitle from '../Share/PageTitle';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Together from './Together/Together';

const Home = () => {

    return (
        <div>
             <PageTitle title='Home'></PageTitle>
           <Banner></Banner>
           <Services></Services>
           <Together></Together>
        </div>
    );
};

export default Home;