import * as React from 'react';

export interface Props {
  tasks: number[];
}

export function SimpleTaskList({ tasks }: Props) {
  const taskDivStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start'
  };

  // TODO: styling
  const itemStyle: React.CSSProperties = {
    // display: 'inline',
  }
  return (
    <div style={taskDivStyle}>
      {
        tasks.map((task: number, index: number) => {
          return (
            <li style={itemStyle} key={index}> {task} </li>
          )
        })
      }
    </div>
  );
}