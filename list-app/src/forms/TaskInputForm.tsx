import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

export interface Props {
    handleSubmit: any // temporarily
}

// TODO add form validation
function TaskInputForm({handleSubmit}: Props) {
    return (
        <form onSubmit={handleSubmit}>
            <label> type your task </label>
            <Field name="code" component="input" type="text" />
        </form>
    );
}

export function TaskInputFormWithId(identifier: string, destroyOnUnmount: boolean = true) {
    return reduxForm({
        form: identifier,
        destroyOnUnmount
    })(TaskInputForm);
}

export default TaskInputFormWithId;
