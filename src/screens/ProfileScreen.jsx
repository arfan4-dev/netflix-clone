import React from 'react'
import Nav from '../Nav'
import './profileScreen.css'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const ProfileScreen = () => {
const navigate=useNavigate()

    async function logOut() {
        try{
            await signOut(auth);
            navigate('/')

        }catch(err){
            console.log()
        }

      }
 



  return (
    <div className='profileScreen'>
        <Nav/>
<div className='profileScreen__body'>
    <h1>Edit Profile</h1>
    <div className="profileScreen__info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />


        <div className='profileScreen__details'>
            <h2>{'userEmail'}</h2>
            <div className='profileScreen__plans'>
                <h3>Plans (Current Plan:premium)</h3>
                <p>Renewal date : {`20:10:2023`}</p>

                <div className='profileScreen__plans__details'>
                    <div className='profileScreen__plans__div'>
                    <h5>Netflix Standard</h5>
                    <p>1040p</p>
                    </div>

                    <div>
                        <button className='profileScreen__plans__details_btn'>Subscribe</button>
                    </div>
                </div>

                <div className='profileScreen__plans__details'>
                    <div className='profileScreen__plans__div'>
                    <h5>Netflix Basic</h5>
                    <p>480p</p>
                    </div>

                    <div>
                        <button className='profileScreen__plans__details_btn'>Subscribe</button>
                    </div>
                </div>

                <div className='profileScreen__plans__details'>
                    <div className='profileScreen__plans__div'>
                    <h5>Netflix Premium</h5>
                    <p>1040p</p>
                    </div>

                    <div>
                        <button className='profileScreen__plans__details_btnP'>Current Package</button>
                    </div>
                </div>

        <button className='profileScreen__signout' onClick={logOut}>  Sign out</button>
            </div>



        </div>


    </div>
</div>
    </div>
  )
}

export default ProfileScreen