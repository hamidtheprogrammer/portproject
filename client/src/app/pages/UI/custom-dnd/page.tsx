"use client";
import React, { useState, useRef, useEffect } from "react";

const statuses = ["Pending", "In Progress", "Complete"];

type Task = {
  id: number;
  name: string;
  status: string;
  order: number;
};

const initialTasks = [
  { id: 1, name: "Fix bug #101", status: "In Progress", order: 1 },
  { id: 2, name: "Deploy API", status: "Complete", order: 1 },
  { id: 3, name: "Write documentation", status: "Pending", order: 1 },
  { id: 4, name: "Refactor code", status: "In Progress", order: 2 },
  { id: 5, name: "Optimize database", status: "Complete", order: 2 },
];

export default function TodoTabs() {
  const [tasks, setTasks] = useState(initialTasks);
  const [dragging, setDragging] = useState<boolean>(false);
  const dragItem = useRef<Task>(null);

  const handleDragStart = (task: Task) => {
    dragItem.current = task;
    setDragging(true);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: any, task: Task) => {
    if (!dragItem.current || dragItem.current.id === task.id) return;

    setTasks((prev) => {
      const updatedTasks = [...prev];

      const draggingIdx = updatedTasks.findIndex(
        (t) => t.id === dragItem.current?.id
      );

      const enteredIdx = updatedTasks.findIndex((t) => t.id === task.id);

      const movedTask = updatedTasks.splice(draggingIdx, 1)[0];

      movedTask.status = task.status;

      updatedTasks.splice(enteredIdx, 0, movedTask);

      return updatedTasks;
    });
  };

  function handleDragDrop() {
    dragItem.current = null;

    setDragging(false);
  }
  function handleMouseUp() {
    dragItem.current = null;

    setDragging(false);
  }

  function handleEmptyDragEnter(status: string) {
    if (tasks.filter((task) => task.status === status).length !== 0) return;
    console.log(dragItem.current);
    setTasks((prev) => {
      const newTasks = prev.map((t) =>
        t.id === dragItem.current?.id ? { ...t, status: status } : t
      );
      //   console.log(newTasks);

      return newTasks;
    });
  }

  useEffect(() => {
    const handleMouseUp = () => {
      setDragging(false);
      dragItem.current = null;
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <>
      <h1 className="text-center my-4 font-semibold">
        Drag and drop the following tasks into statuses
      </h1>
      <div className="mx-auto mt-8 flex max-w-4xl space-x-4">
        {statuses.map((status) => (
          <div
            onDragOver={handleDragOver}
            onDrop={handleDragDrop}
            onDragEnter={() => handleEmptyDragEnter(status)}
            key={status}
            className="max-h-fit w-1/3 rounded-lg bg-gray-100 p-4 shadow-md"
          >
            <h2 className="mb-3 text-center text-lg font-semibold">{status}</h2>
            <div className="space-y-2">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    onDragStart={() => handleDragStart(task)}
                    onDragEnter={(e) => handleDragEnter(e, task)}
                    draggable
                    key={task.id}
                    className={`${
                      dragItem.current &&
                      dragItem.current.id === task.id &&
                      dragging &&
                      "opacity-50"
                    } cursor-pointer rounded-md border bg-white p-3 shadow-sm`}
                  >
                    {task.name}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
