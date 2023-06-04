import React from 'react';
import '../../App.css';
const FriendWork = () => {
    return (
        <div style={{paddingLeft:'1em',paddingRight:'1em',flexDirection:'row',boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.4)',borderRadius:'.5em' , width:'25%',background: 'linear-gradient(270deg, #800080 0%, #FF864C 100%)'}}>
           <div style={{display:'flex' , justifyContent:'space-between'}}>
              <div style={{paddingTop:'.2em',paddingBottom:'.2em'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>Dhiraj Saxena</text> 
              </div>
              <div>
                 <text style={{color:'white',fontSize:'10px', fontFamily:'Poppins'}}>14 Sep, 2022</text>
              </div>
           </div>
           <div style={{flexDirection:'row'}}>
             <div style={{paddingTop:'1em',paddingBottom:'1em'}}>
                 <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>Course Enrolled(6)</text>
             </div>
             <div style={{display:'flex', justifyContent:'space-evenly',paddingTop:'1em',paddingBottom:'1em'}}>
                <div style={{border:'1px solid white', borderRadius:'1em',width:'10%'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>UI/UX</text>
                </div>
                <div style={{border:'1px solid white', borderRadius:'1em',width:'20%'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>PhotoShop</text>
                </div>
                <div style={{border:'1px solid white', borderRadius:'1em',width:'20%'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>Illustrator</text>
                </div>
               </div>
               <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{border:'1px solid white', borderRadius:'1em',width:'10%'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>Python</text>
                </div>
                <div style={{border:'1px solid white', borderRadius:'1em',width:'10%'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>Mern</text>
                </div>
                <div style={{border:'1px solid white', borderRadius:'1em',width:'10%'}}>
                  <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>JAVA</text>
                </div>
             </div>
           </div>
           <div style={{display:'flex',paddingTop:'1em', paddingBottom:'1em'}}>
            <div style={{paddingRight:'.5em'}}>
             <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>Referral Amount</text>
            </div>
            <div>
            <text style={{color:'white', fontSize:'10px', fontFamily:'Poppins'}}>₹185</text> 
            </div>
           </div>
        </div>
    )
}

export default FriendWork;