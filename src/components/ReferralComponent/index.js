import React from 'react';
import RefEarning from '../ReferralSection/RefEarning';
import ReferralCode from '../ReferralCode/ReferralCode';

const Referral = () => {
    return (
        <div style={{display:'flex'}}>
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