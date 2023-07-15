import React from 'react';
import TaskList from '../components/Tasks/TaskList';
import Link from 'next/link';

const tasks = [
    {
        id: 1,
        name: 'Task 1'
    },
    {
        id: 2,
        name: 'Task 2'
    }
];

export default function Tasks() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <div className="relative place-items-center">
          <h1 className="text-2xl font-bold mb-3">Tasks</h1>
          <TaskList tasks={tasks} />
          <Link type="button"
            href="/tasks/new"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            + Create a Task
          </Link>
      </div>
    </main>
  )
}