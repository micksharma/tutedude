import React from 'react';
import { Link } from 'react-router-dom';
const HomeScreen = () => {
    return (
      <nav>
        <ul>
            
            <li>
                <Link to="/ReferAndEarn">ReferAndEarn</Link>
            </li>
            <li>
                <Link to="/FriendsReferreds">FriendsReferred</Link>
            </li>
        </ul>
      </nav>
    )
}

export default HomeScreen;