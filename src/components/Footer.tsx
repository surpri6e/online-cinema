import React from 'react'
import instagram from '../images/icons/instagram.svg'
import twitter from '../images/icons/twitter.svg'
import facebook from '../images/icons/facebook.svg'
import telegram from '../images/icons/telegram.svg'
import { Link } from 'react-router-dom'
import { MAIN_PAGE_PATH } from '../paths'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="_Container">
        <div className="footer_body">

          <ul className="footer_social">
            <li><a href="#"><img src={instagram} alt="instagram" /></a></li>
            <li><a href="#"><img src={twitter} alt="twitter" /></a></li>
            <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
            <li><a href="#"><img src={telegram} alt="telegram" /></a></li>
          </ul>

          <ul className="footer_help">
            <li><Link to={MAIN_PAGE_PATH}>Home</Link></li>
            <li><Link to={MAIN_PAGE_PATH}>Support</Link></li>
            <li><Link to={MAIN_PAGE_PATH}>Account</Link></li>
          </ul>

          <h3 className="footer_logo logo">PlayOn</h3>

        </div>
      </div>
    </footer>
  )
}

export default Footer