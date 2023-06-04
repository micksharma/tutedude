import React from 'react';
import { ReactSVG } from 'react-svg';
import RsIcon from '../../assets/img/₹.svg';
const FriendEarn = () => {
    return (
        <div style={{flexDirection:'row',boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.4)',borderRadius:'.5em' , width:'140%'}}>
         <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <div style={{flexDirection:'row'}}>
            <div>
             <p style={{fontSize:'10px',fontFamily:'Poppins',color:'#800080'}}>Wallet Balance</p>
            </div>
            <div style={{display:'flex'}}>
              <div style={{paddingTop:'.4em'}}>
                 <ReactSVG src={RsIcon}/>
              </div>
              <div>
                <text style={{fontSize:'32px'}}> 500 </text>
              </div>
            </div>
          </div>  
         </div>
       
      </div>
    )
}

export default FriendEarn;