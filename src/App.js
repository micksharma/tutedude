import React from 'react';
import ReferAndEarn from './screens/ReferAndEarn';
import FriendsReferred from './screens/FriendsReferred';
import {Routes , BrowserRouter as Router , Switch , Redirect , useNavigate, Route} from 'react-router-dom';
function App() {
  
  return (
    <>      
       <ReferAndEarn />
       {/* <FriendsReferred /> */}
    </>
  );
}

export default App;
