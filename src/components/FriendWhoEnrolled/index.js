import React from 'react';
import FriendWork from '../FriendWork';

const FriendWhoEnrolled = () => {
    return (
        <div style={{paddingLeft:'8em',paddingTop:'2em'}}>
        <div>
          <p  style={{fontFamily:'Poppins', fontSize:"16px" , color:'#800080'}}>Friends who enrolled(3)</p>
        </div>  
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <FriendWork />
            <FriendWork />
            <FriendWork />
        </div>
        <div style={{paddingTop:'4em'}}>
          <p  style={{fontFamily:'Poppins', fontSize:"12px" , color:'#800080'}}>Terms & Conditions</p>
        </div>
     </div>
    )
}

export default FriendWhoEnrolled;