import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index, moveTask, deleteTask, openEditModal }) {

  return(
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`taskCard ${snapshot.isDragging ? "dragging" : ""}`}
        >

        <p onClick={() => openEditModal(task)}
            style={{ cursor: "pointer" }}
            >
            {task.title}
        </p>

        <button onClick={() => moveTask(task.id, "back")}>◀
        </button>

        <button onClick={() => moveTask(task.id, "forward")}>▶
        </button>

        <button onClick={() => deleteTask(task.id)}>🗑
        </button>

        </div>
      )}
    </Draggable>
  )
}
