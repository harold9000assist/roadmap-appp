  import { Phase } from './types/types';
  
  export const initialPhases: Phase[] = [
    {
      id: 1,
      title: 'Foundation',
      duration: 4,
      dueDate: '2024-12-31',
      tasks: [
        {
          id: 1,
          text: 'Project setup',
          status: 'completed',
          dueDate: '2024-12-15',
          assignee: 'Amin',
          priority: 'high',
        },
      ],
    },
  ];
  "@
# Create App.tsx
Set-Content -Path "./src/App.tsx" -Value @"
import React, { useState } from 'react';
import { initialPhases } from './data';
import { Phase } from './types/types';
import PhaseComponent from './components/PhaseComponent';

const App: React.FC = () => {
  const [phases, setPhases] = useState<Phase[]>(initialPhases);

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Project Roadmap</h1>
        {phases.map((phase) => (
          <PhaseComponent key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default App;
