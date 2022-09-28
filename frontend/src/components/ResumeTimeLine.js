
function ResumeTimeLine(props){
    //console.log(props.data);
    return (
        
        <li>
            <div className="timeline_content">
            <span>{props.data.time}</span>
            <h4>{props.data.designation}</h4>
            <p>{props.data.text}</p>
            </div>
        </li>
    );
}

export default ResumeTimeLine