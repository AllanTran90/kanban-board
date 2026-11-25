import  TaskCard  from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

export default function Column({ title, status, tasks, moveTask, deleteTask, openEditModal }) {

  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div style={{ background: "#a0e8edff", padding: "20px", width: "200px" }}>
      <h3>{title}</h3>

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`taskList ${snapshot.isDraggingOver ? "draggingOver" : ""}`}
          >
            {filteredTasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                moveTask={moveTask}
                deleteTask={deleteTask}
                openEditModal={openEditModal}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
