
import {FaUserCircle, FaBars} from 'react-icons/fa'

import './index.css'

const Header = () => {
    return(
      <nav className='nav-bar App-header'>
          <div className='logo'>
            <FaBars className='opp-button'/>
            <p className='logo-name'>IndigoLearn</p>
          </div>
          <div className='opptios'>
            <p className='opp'>BUY COURSE</p>
            <p className='opp'>BUY BOOKS</p>
            <p className='opp'>PROGRAMS</p>
            <p className='opp'>FREE RESOURCES</p>
          </div>
          <button className='log-button'>
            <FaUserCircle className='profile'/>
            Log In/Sign Up
          </button>
        </nav>
    )
}
export default Header