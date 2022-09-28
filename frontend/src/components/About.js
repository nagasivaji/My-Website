
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
                <div className="_name">
                    <h1>I'm NagaSivaji</h1>
                </div>
                <div className="_list">
                    <ul>
                        <li>Lorem ipsum dolor sit amet. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at, voluptatem mollitia maxime in blanditiis? Quaerat sed quis aut voluptate nulla unde sit? Non laborum ut quisquam, ipsam fugit amet!</li>
                        <li>consectetur adipisicing elit. </li>
                        <li>consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at, voluptatem mollitia maxime in blanditiis? Quaerat sed quis aut voluptate nulla unde sit? Non laborum ut quisquam, ipsam fugit amet!</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;