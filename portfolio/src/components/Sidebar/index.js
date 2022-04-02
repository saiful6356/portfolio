import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Logos from '../../assets/images/logo-s.png';

const Sidebar = () => {
    return (
        <div className="nav-bar">
          <Link className='logo' to='/'>
           <img src={Logos} alt="logo" />
           <h3 className='sub-logo'>Saiful</h3>  
         </Link>
         <nav>
             <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
             </NavLink>

             <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#022c43;'/>
             </NavLink>

             <NavLink exact='true' activeclassname='active'className='contact-link'  to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#022c43;'/>
             </NavLink>
         </nav>
         <ul>
             <li>
                 <a target='_blank' rel='noreferrer' href='hhj'>
                 <FontAwesomeIcon icon="fa-brands fa-facebook" color='#4d4d4e'
                 />
                 </a>
             </li>
             <li>
                 <a target='_blank' rel='noreferrer' href='ujgug'>
                 <FontAwesomeIcon icon="fa-brands fa-github" color='#4d4d4e'
                 />
                 </a>
             </li>
         </ul>
        </div>
    );
    }
export default Sidebar;