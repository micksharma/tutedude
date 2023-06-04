import React from 'react';
import WorkComponent from '../workComponent';

const work = () => {
    return (
        <div style={{paddingLeft:'8em',paddingTop:'2em'}}>
           <div>
             <p  style={{fontFamily:'Poppins', fontSize:"16px" , color:'#800080'}}>How does it Work ?</p>
           </div>
           <WorkComponent />
           <div>
             <p  style={{fontFamily:'Poppins', fontSize:"12px" , color:'#800080'}}>Friends Who Enrolled</p>
           </div>
           <div>
             <p  style={{fontFamily:'Poppins', fontSize:"12px" , color:'#800080'}}>Terms & Conditions</p>
           </div>
        </div>
    )
}

export default work;