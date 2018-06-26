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
            <span contentEditable={true}> {item.code} </span>
            :
            <span contentEditable={true}> {item.subscription} </span>
        </div>
    );
}

export default TaskItem;