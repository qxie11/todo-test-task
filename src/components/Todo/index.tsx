import React, { useState } from "react";
import Task from "./Task";
import "./Todo.scss";

const Todo: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [currentValue, setValue] = useState<string>('');

    const addTask = () => {
        if (!currentValue.trim()) return;
        setTasks((prevState) => [...prevState, currentValue]);
        setValue('');
    }

    const setCurrentValue = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setValue(value);

    const deleateTask = (index: number) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };


    return (
        <div className="todo">
            <input type="text" placeholder="Type your task" className="todo__input" onChange={setCurrentValue} value={currentValue} />
            <button className="todo__add-button" onClick={addTask}>ADD</button>
            <div className="todo__tasks">
                {
                    tasks.map((task, i) => <Task key={task + i} task={task} deleateTask={deleateTask} />)
                }
            </div>
        </div>
    );
}

export default Todo;