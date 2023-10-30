import React, { useEffect, useState } from 'react'
import './nav.css'

import { NavLink } from 'react-router-dom'
const Nav = () => {
  const [handleShow,setHandleShow]=useState(false)

  const transitionScrollNav=()=>{
    if(window.scrollY>100){
      setHandleShow(true);
    }
    else{
      setHandleShow(false);
    }
  }



  useEffect(()=>{
     window.addEventListener('scroll',transitionScrollNav);
     return ()=> window.removeEventListener('scroll',transitionScrollNav)
  },[]) 
  return (
    <div className={`nav  ${handleShow && 'nav__black'}`}>
      <div className='nav__content'>

          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" className="nav__logo"/>
    

<NavLink to='/profileScreen'>
    <img className='nav__avatar'   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
</NavLink>

      
      </div> 
    </div>
  )
}

export default Nav