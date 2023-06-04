import React from 'react';
import ReferAndEarn from './screens/ReferAndEarn';
import FriendsReferred from './screens/FriendsReferred';
import {Route , BrowserRouter as Router , Switch , Redirect} from 'react-router-dom';
function App() {
  return (
    <>    
       {/* <ReferAndEarn /> */}
       <FriendsReferred />
    </>
  );
}

export default App;
