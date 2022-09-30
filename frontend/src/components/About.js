
// Importing styles
import './../styles/Component Styles/About.css';

// Importing about background
import aboutBG from './../images/About bg.png';

function About(){
    return (
        <div className="_aboutArea">
            <div className='_titleArea'>
                <h4>ABOUT ME</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='_contentArea'>
                <div className="_imageArea">
                    <img src={aboutBG} alt="" />
                </div>
                <div className="_textArea">
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
        </div>
    );
}

export default About;