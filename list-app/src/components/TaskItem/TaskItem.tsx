import * as React from 'react';
import { Task } from '../../types';

export interface Props {
    item: Task;
    // isChangable: boolean;
    // onItemChange: (item: Task) => void;
}

function TaskItem({item}: Props) {
    return (
        <div> 
            <span> {item.code} </span>
            :
            <span> {item.subscription} </span>
            {/* tags */}
        </div>
    );
}

export default TaskItem;