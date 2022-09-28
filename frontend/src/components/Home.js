// Importing css
import './../styles/Component Styles/Home.css';

// importing home page bg
import homeBg from './../images/homepage bg.png';

function Home(){
    return(
        <div className='_homeArea'>
            <div className="_textArea">
                <div className="_hello">Hello ___________________</div>
                <div className="_name">I AM NAGA SIVAJI</div>
                <div className="_job">MERN STACK DEVELOPER</div>
                <div className="_btns">
                    <button className="_hireMeBtn">HIRE ME</button>
                    <button className="_getCvBtn">GET CV</button>
                </div>
            </div>
            <div className="_imageArea">
                <img src={homeBg} alt="" />
            </div>
        </div>
    );
}

export default Home;