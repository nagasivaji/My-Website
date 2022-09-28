
// Importing styles
import './../styles/Component Styles/About.css';

// Importing about background
import aboutBG from './../images/About bg.png';

function About(){
    return (
        <div className="_aboutArea">
            <div className="_imageArea">
                <img src={aboutBG} alt="" />
            </div>
            <div className="_textArea">
            </div>
        </div>
    );
}

export default About;