import React from 'react';
import '../../App.css';

const FriendRefCode = () => {
    return (
        <div>
           <div>
              <p  style={{fontFamily:'Poppins', fontSize:"16px" , color:'#800080'}}>Your Referral Code</p>
           </div>
           <div style={{borderStyle:'ridge' , paddingBottom:'.5em',paddingTop:'.5em' ,width:'100%',display:'flex', justifyContent:'space-evenly', borderRadius:'.5em'}}>
               <div>
                  <text style={{fontFamily:'Poppins', fontSize:"14px" , color:'#800080'}}>E</text>
               </div>
               <div>
                  <text style={{fontFamily:'Poppins', fontSize:"14px" , color:'#800080'}}>D</text>
               </div>
               <div>
                  <text style={{fontFamily:'Poppins', fontSize:"14px" , color:'#800080'}}>C</text>
               </div>
               <div>
                  <text style={{fontFamily:'Poppins', fontSize:"14px" , color:'#800080'}}>H</text>
               </div>
               <div>
                  <text style={{fontFamily:'Poppins', fontSize:"14px" , color:'#800080'}}>5</text>
               </div>
               <div>
                  <text style={{fontFamily:'Poppins', fontSize:"14px" , color:'#800080'}}>4</text>
               </div>
           </div>
        </div>
    )
}

export default FriendRefCode;