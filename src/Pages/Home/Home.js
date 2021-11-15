import React from 'react';
import { useEffect } from 'react';
import Banner from '../Home/Banner/Banner'
import PopularPackages from '../Home/PopularPackages/PopularPackages'
import Influence from './Influence/Influence';
import Contact from './Contact/Contact'
import Destination from './Destination/Destination';

const Home = () => {
    useEffect(() => {
        document.title = 'Trackers Zone : Your Trusted Travel Partner'
    }, []);

    return (
        <>
            <Banner></Banner>
            <PopularPackages></PopularPackages>
            <Influence></Influence>
            <Destination></Destination>
            <Contact></Contact>
        </>

    );
};

export default Home;