const Task = (props) => {
    return (
        <li><img src={props.icon} /> {props.text} <img src={props.image} /></li>
    )
}

export default Task;