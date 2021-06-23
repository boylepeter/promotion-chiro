import React from 'react';
import Welcome from '../components/Welcome';
import LandingNav from '../components/Navs/LandingNav'
import Wrapper from '../components/Wrapper';


const Landing = () => {

    return (
        <Wrapper>
        <Welcome />
        <LandingNav />
        </Wrapper>
    )
}

export default Landing