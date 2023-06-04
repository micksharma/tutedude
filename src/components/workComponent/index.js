import React from 'react'
import { ReactSVG } from 'react-svg';
import InvitePeople from '../../assets/img/InvitePeople.svg';
import Wallet from '../../assets/img/wallet.svg';
import RsIcon from '../../assets/img/₹.svg';
import Discount from '../../assets/img/Discount.svg';
import Coupen from '../../assets/img/coupen.svg';

const workComponent = () => {
    const IconsData = [
        {
            title:InvitePeople
        },
        {
            title:Wallet
        },
        {
            title:RsIcon
        },
        {
            title:Discount
        },
        {
            title:Coupen
        }
    ]

    const titles = [
        {   
            id:'1',
            heading: 'Invite your Friends',
            subHeading: 'Share the link tutedude.com with your friends'
        },
        {
            id:'2',
            heading: 'You get ₹ 200 as referral money',
            subHeading: 'On total purchase the friend makes, into your wallet'
        },
        {
            id:'3',
            heading:'Transfer money from wallet',
            subHeading:'When the wallet balance reaches ₹200 or more, you can withdraw it'
        },
        {
            id:'4',
            heading:'Friend purchases any course',
            subHeading: 'Using your REFERRAL CODE in the payments page'
        },
        {
            id:'5',
            heading:'Your Friend gets ₹ 200 Off ',
            subHeading: 'On his overall fee on successful purchase using your referral code '
        }
    ]
    return (
       <div style={{flexWrap:'wrap',width:'40%'}}>
        <div style={{display:'flex'}}>
              <div style={{paddingRight:'.8em'}}>
                {IconsData.map((item) => 
                (
                   <div style={{paddingBottom:'.5em',paddingTop:'1.1em'}}> 
                    <ReactSVG src={item.title} />
                   </div>
                ))}          
              </div>
              <div style={{flexDirection:'column'}}>
                {titles.map((item) => (
                   <div style={{paddingBottom:'.5em'}}>
                   <div>
                        <text style={{ fontFamily: 'poppins', fontSize: '.8em' }}>{item.heading}</text>
                    </div>
                    <div style={{ width: '80%' }}>
                        <text style={{ fontFamily: 'poppins', fontSize: '.8em', color: 'grey' }}>{item.subHeading}</text>
                    </div>
                    </div>
              ))}
              </div>
           </div>
        </div>
    )
}

export default workComponent;