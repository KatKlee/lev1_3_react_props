import './List.css';
import Task from './Task'
import { v4 as uuidv4 } from 'uuid';

const List = (props) => {
    return (
        <div>
            {/* Headline */}
            <h1>To do List</h1>
            {/* List */}
            <ul>
                {props.tasks.map((elt) =>
                    <Task
                        key={uuidv4()}
                        icon={elt.icon}
                        text={elt.task}
                        image={elt.image}
                    />
                )}
            </ul>
        </div>
    )
}

export default List;