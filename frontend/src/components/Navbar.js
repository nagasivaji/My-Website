// Importing Link from react-router-dom
import { Link } from 'react-router-dom';

// Import CSS
import './../styles/Component Styles/NavBar.css';
function Navbar(){
    return(
        <div className="_navBar">
            <div className="_title">
                <Link to="#"><p>Sivaji</p></Link>
            </div>
            <div className="_links">
                <Link to="#"><p className='active'>Home</p></Link>
                <Link to="#"><p>About</p></Link>
                <Link to="#"><p>Resume</p></Link>
                <Link to="#"><p>Skills</p></Link>
                <Link to="#"><p>Projects</p></Link>
                <Link to="#"><p>Certificates</p></Link>
                <Link to="#"><p>Achievements</p></Link>
                <Link to="#"><p>Contact</p></Link>
            </div>
            <span className="material-symbols-outlined">
menu
</span>
        </div>
    );
}

export default Navbar;