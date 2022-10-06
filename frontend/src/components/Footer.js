// Importing Styles....

import './../styles/Component Styles/Footer.css';

function Footer(){
    return(
        <div className='_footer'>
            <div className="_footerArea">
                <div className="_titleArea">
                    <h4>Contact Me</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='_blurArea'>
                    <div className='_socialMediaLinks'>
                        <div className='_text'>
                            Get connected with me on social networks:
                        </div>
                        <div className='_links'>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-google"></i>
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-github"></i>
                            <i class="bi bi-telephone"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='_footerEnd'>
                <p>Made by <span>NagaSivaji</span> with ❤️</p>
            </div>
        </div>
    );
}

export default Footer;