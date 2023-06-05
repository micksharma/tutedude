import React from 'react';
import EarnBar from '../components/header/EarnBar';
import Header from '../components/header/header';
import Referral from '../components/ReferralComponent';
import Work from '../components/work';

const ReferAndEarn = () => {
    return (
        <>
        <Header />
       <EarnBar />
       <Referral />
       <Work />
        </>
    )
}

export default ReferAndEarn;