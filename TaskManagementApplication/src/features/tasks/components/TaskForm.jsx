import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useTasks } from "../hooks/useTasks";
import { taskConstants } from "../constants/taskConstants";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function TaskForm({ taskToEdit, onSuccess, onCancel }) {
  const { user } = useAuth();
  const { createTask, updateTask } = useTasks();

  const validate = (values) => {
    const errors = {};
    if (!values.title?.trim()) errors.title = "Title is required";
    return errors;
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  } = useForm({
    initialValues: { title: "", description: "", status: taskConstants.TODO },
    validate,
  });

  useEffect(() => {
    if (taskToEdit) {
      setValues({
        title: taskToEdit.title || "",
        description: taskToEdit.description || "",
        status: taskToEdit.status || taskConstants.TODO,
      });
    } else {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskToEdit]);

  const onSubmit = async (vals) => {
    try {
      if (taskToEdit) {
        await updateTask(taskToEdit.id, {
          title: vals.title,
          description: vals.description,
          status: vals.status,
        });
      } else {
        await createTask({
          title: vals.title,
          description: vals.description,
          status: vals.status,
        });
      }
      onSuccess?.();
    } catch (err) {
      alert(err.message || "Failed to save task");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        {taskToEdit ? "Edit Task" : "Create Task"}
      </h2>

      <div className="space-y-3">
        <Input
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Task title"
          error={touched.title && errors.title}
        />
        <Input
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Task description"
        />
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Status
          </label>
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-2 py-1.5 text-sm"
          >
            <option value={taskConstants.TODO}>TODO</option>
            <option value={taskConstants.IN_PROGRESS}>IN_PROGRESS</option>
            <option value={taskConstants.DONE}>DONE</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <Button type="submit">{taskToEdit ? "Update" : "Create"}</Button>
        {onCancel && (
          <Button type="button" onClick={onCancel} variant="secondary">
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
