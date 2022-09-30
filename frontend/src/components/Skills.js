
// Importing CSS
import './../styles/Component Styles/Skills.css';
// importing Components
import Skill from './Skill';


function Skills(){
    //console.log(html);
    return (
        <div className="_skillsArea">
            <div className="_titleArea">
                <h4>My skills</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="_contentArea">
                <div className="row">
                    <Skill skillName="HTML" />
                    <Skill skillName="CSS" />
                    <Skill skillName="BOOT STRAP" />
                    <Skill skillName="JAVA SCRIPT" />
                    <Skill skillName="NODE" />
                    <Skill skillName="EXPRESS" />
                    <Skill skillName="REACT" />
                    <Skill skillName="VUE" />
                    <Skill skillName="MY SQL" />
                    <Skill skillName="MONGO DB" />
                    <Skill skillName="ARDUION" />
                    <Skill skillName="JAVA" />
                </div>
            </div>
        </div>
    );
}

export default Skills;