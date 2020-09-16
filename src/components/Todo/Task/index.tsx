import React, { useState } from "react";

interface TaskProps {
  task: string,
  deleateTask: (index: number) => void
}

const Task: React.FC<TaskProps> = ({ task, deleateTask }) => {
  const [currentValue, setValue] = useState<string>(task);
  const [isEditing, setEditing] = useState<boolean>(false);

  const defineIndex = ({ currentTarget }: React.MouseEvent<HTMLSpanElement>) => {
    const thisTask = currentTarget!.parentElement;
    const taskArea = Array.from(thisTask!.parentElement!.children);
    const index = taskArea.indexOf(thisTask!);
    deleateTask(index);
  }

  const changeTaskValue = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => setValue(value);

  const editTask = () => setEditing(!isEditing);

  return (
    <div className="todo__tasks-task">
      <input type="checkbox" id={task} />
      <label className="is-done" htmlFor={task}></label>
      {!isEditing ? <p className="text">{currentValue}</p> : <textarea value={currentValue} onChange={changeTaskValue} />}
      <div onClick={editTask} className={!isEditing ? "edit" : "ready"}></div>
      <span onClick={defineIndex} className="deleate">&#x2716;</span>
    </div>
  );
}

export default Task;