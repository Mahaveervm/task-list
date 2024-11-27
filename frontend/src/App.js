import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    return (
        <div>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
