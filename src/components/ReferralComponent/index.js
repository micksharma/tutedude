import React from 'react';
import RefEarning from '../ReferralSection/RefEarning';
import ReferralCode from '../ReferralCode/ReferralCode';
import '../ReferralComponent/index.css';
const Referral = () => {
    return (
        <div className="referral_header" style={{display:'flex'}}>
            <div style={{paddingLeft:'8em'}}>
                <RefEarning />
            </div>
            <div style={{paddingLeft:'36em'}}>
                <ReferralCode />
            </div>

        </div>
    )
}

export default Referral;