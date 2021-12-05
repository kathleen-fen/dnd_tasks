const initialData = {
  tasks: {
    task1: { id: "task1", content: "Take out the garbage" },
    task2: { id: "task2", content: "Watch my favorite show" },
    task3: { id: "task3", content: "Charge my phone" },
    task4: { id: "task4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task1", "task2", "task3", "task4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
