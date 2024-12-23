import React from 'react';
import { Phase } from '../types/types';
import TaskComponent from './TaskComponent';

const PhaseComponent: React.FC<{ phase: Phase }> = ({ phase }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
      <h2 className='text-xl font-semibold mb-2'>{phase.title}</h2>
      <p className='text-gray-600 mb-3'>Duration: {phase.duration} weeks (Due: {phase.dueDate})</p>
      <div>
        {phase.tasks.map((task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default PhaseComponent;
