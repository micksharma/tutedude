import React from 'react';
import '../../App.css';
import { ReactSVG } from 'react-svg';
import RsIcon from '../../assets/img/₹.svg';
const RefEarning = () => {
    return (
      <div style={{flexDirection:'row',boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.4)',borderRadius:'.5em' , width:'140%'}}>
         <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <div style={{flexDirection:'row',paddingRight:'.5em'}}>
            <div>
             <p style={{fontSize:'10px',fontFamily:'Poppins',color:'#800080'}}>Referral Earning</p>
            </div>
            <div style={{display:'flex'}}>
              <div style={{paddingTop:'.5em'}}>
                <ReactSVG src={RsIcon} />
              </div>
            <div>
             <text style={{fontSize:'32px'}}> 2,500 </text>
            </div>
            </div>
          </div>  
          <div style={{flexDirection:'row',paddingRight:'.5em'}}>
            <div>
             <p style={{fontSize:'10px',fontFamily:'Poppins',color:'#800080'}}>Total Referral</p>
            </div>
            <div style={{display:'flex'}}>
              <div style={{paddingTop:'.5em'}}>
                 <ReactSVG src={RsIcon} />
              </div>
            <div>
               <text style={{fontSize:'32px'}}>7</text>
            </div>
            </div>
          </div>  
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
         <div style={{paddingLeft:'7.5em',paddingBottom:'1.5em',paddingTop:'2em'}}>
           <button style={{border:'none',backgroundColor:'#800080',borderRadius:'1em',color:'white',paddingTop:'.5em',paddingBottom:'.5em'}}>Withdraw Balance</button>
         </div>
      </div>
    )
}



export default RefEarning;