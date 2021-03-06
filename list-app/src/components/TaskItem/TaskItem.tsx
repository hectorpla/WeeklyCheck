import * as React from 'react';
import { Task } from '../../types';

export interface Props {
    item: Task;
    // isChangable: boolean;
    // onItemChange: (item: Task) => void;
    onDelete: () => void
}

function TaskItem({item, onDelete}: Props) {
    const handleDelete = () => onDelete();
    return (
        <ul> 
            <span> {item.code} </span>
            :
            <span> {item.description} </span>
            {/* tags */}
            <span className="right" onClick={handleDelete}> delete </span>
        </ul>
    );
}

export default TaskItem;