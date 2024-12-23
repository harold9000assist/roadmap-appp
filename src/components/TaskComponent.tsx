import React from 'react';
import { Task } from '../types/types';
import { Check, Circle, Loader2 } from 'lucide-react';

const TaskComponent: React.FC<{ task: Task }> = ({ task }) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'completed':
        return <Check className='text-green-500' />;
      case 'in-progress':
        return <Loader2 className='text-blue-500 animate-spin' />;
      case 'pending':
      default:
        return <Circle className='text-gray-400' />;
    }
  };

  return (
    <div className='flex items-center justify-between border-b border-gray-200 py-2'>
      <div className='flex items-center'>
        {getStatusIcon()}
        <span className='ml-2'>{task.text}</span>
      </div>
      <div className='text-sm text-gray-500 text-right'>
        <p>Due: {task.dueDate}</p>
        <p>{task.assignee}</p>
        <p>{task.priority}</p>
      </div>
    </div>
  );
};

export default TaskComponent;
