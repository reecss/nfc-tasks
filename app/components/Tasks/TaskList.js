import React from 'react';
import Link from 'next/link';

const TaskList = ({ tasks }) => {
    const taskList = tasks.map((task) => (
        <li key={task.id} className="p-2 mb-2 bg-slate-100 hover:bg-slate-50 hover:cursor-pointer">
            <Link href={`/tasks/${task.id}`}>{task.name}</Link>
        </li>
    ));

    return (
        <div>
            <ul>
                {taskList}
            </ul>
        </div>
    );
}

export default TaskList;