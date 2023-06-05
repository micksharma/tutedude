import React from 'react';
import ReferAndEarn from './screens/ReferAndEarn';
import FriendsReferred from './screens/FriendsReferred';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomeScreen from './screens/Home';
function App() {
  
  return (
    <>      
       {/* <ReferAndEarn />
       <FriendsReferred /> */}
       <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomeScreen />} />
           <Route path="/ReferAndEarn" element={<ReferAndEarn />} />
           <Route path="/FriendsReferreds" element={<FriendsReferred />} />
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
