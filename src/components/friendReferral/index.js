import React from 'react';
import FriendRefCode from '../friendRefCode';
import FriendEarn from '../FriendEarn';
const Friends = () => {
    return (
        <div style={{display:'flex'}}>
        <div style={{paddingLeft:'8em'}}>
            <FriendRefCode />
        </div>
        <div style={{paddingLeft:'56em'}}>
            <FriendEarn />
        </div>

    </div>
    )
}

export default Friends;