import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/img/logo.svg';
import DownArrow from '../../assets/img/DownArrow.svg';
import Profile_logo from '../../assets/img/Profile_logo.svg';
import '../../App.css';
import '../../components/header/header.css';
const header = () => {
    return (
      <div className='main' style={{display:'flex'}}>
         <div className='main_logo' style={{ width:'60%' ,paddingLeft:'2em'}}>
             <ReactSVG src={logo} />
          </div>
          <div className='header_class' style={{ width:'40%', display:'flex',justifyContent:'space-evenly'}}>
             <div className="header_assignment">
                <p style={{fontFamily:'Poppins',fontSize:"16px",color: 'rgba(128, 0, 128, 0.25)'}}>My Assignment</p>
             </div>
             <div className='header_mentor'>
                <p style={{fontFamily:'Poppins',fontSize:"16px",color: 'rgba(128,0,128,0.25)'}}>Chat with Mentor</p>
             </div>
             <div className='header_profile' style={{display:'flex'}}>
                 <div style={{paddingTop:20,paddingRight:5}}>
                   <ReactSVG src={Profile_logo} />
                 </div>
                 <p style={{fontFamily:'Poppins', fontSize:"16px" , color:'#800080'}}>ProfileName</p>
                 <div style={{paddingTop:20,paddingLeft:5}}>
                 <ReactSVG src={DownArrow} />
                 </div>
             </div>
          </div>
      </div>
    )
}

export default header;