import React from "react";

export const TaskCardDeleteButton = ({
  taskCard,
  taskCardsList,
  setTaskCardsList,
}) => {
  const handleDelete = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => handleDelete(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
