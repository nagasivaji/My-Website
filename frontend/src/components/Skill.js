
// Importing the
import './../styles/Component Styles/Skill.css';

function Skill(props){
    return(
        <div className='col col-lg-6 _card'>
            <p>{props.skillName}</p>
        </div>
    );
}

export default Skill;