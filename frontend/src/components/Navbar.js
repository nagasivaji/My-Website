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
                <Link to="#"><p>Contact</p></Link>
            </div>

            <span className="material-symbols-outlined" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">menu</span>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Sivaji's arena...!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="_links">
                        <Link to="#"><p className='active'>Home</p></Link>
                        <Link to="#"><p>About</p></Link>
                        <Link to="#"><p>Resume</p></Link>
                        <Link to="#"><p>Skills</p></Link>
                        <Link to="#"><p>Projects</p></Link>
                        <Link to="#"><p>Contact</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;