import { TaskItem } from "./TaskItem";

export const TaskList = ({
  tasks,
  isLoading,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  if (isLoading) {
    return (
      <section className="rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center">
        <p className="text-sm font-medium text-gray-600">Loading tasks...</p>
      </section>
    );
  }

  if (tasks.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
        <h2 className="text-xl font-bold text-black">No tasks yet</h2>

        <p className="mt-2 text-gray-600">
          Create your first task using the form above.
        </p>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Your tasks</h2>

        <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-600">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </section>
  );
};
