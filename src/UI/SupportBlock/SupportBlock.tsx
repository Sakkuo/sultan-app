import React from 'react'
import './SupportBlock.css'
import support from '../../img/support.png'
import ContactList from '../ContactList/ContactList'

const SupportBlock = () => {



  return (
    <div className='SupportBlock'>
      <ContactList color='black'/>
      <div className="SupportBlock__img">
        <img className='SupportBlock__img--img' src={support} alt="" />
      </div>
    </div>
  )
}


export default SupportBlock