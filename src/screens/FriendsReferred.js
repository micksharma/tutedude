import React from 'react';
import Header from '../components/header/header';
import EarnBar from '../components/header/EarnBar';
import Friends from '../components/friendReferral';
import FriendWhoEnrolled from '../components/FriendWhoEnrolled';

const FriendsReferred = () => {
    return (
      <>
        <Header />
       <EarnBar />
       <Friends />
       <FriendWhoEnrolled />
      </>
    )
}

export default FriendsReferred;