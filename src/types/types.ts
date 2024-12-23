export type Phase = {
    id: number;
    title: string;
    duration: number;
    dueDate: string;
    tasks: Task[];
  };
  
  export type Task = {
    id: number;
    text: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate: string;
    assignee: 'Amin' | 'Salim' | 'Vinc';
    priority: 'low' | 'medium' | 'high';
  };
