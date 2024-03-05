import { ErrorFeedbackProps, FormValuesAdd } from "@/utils/type";
import { ErrorMessage } from "formik";
import { Todo, addTodo, deleteTodo, toggleTodo } from "@/redux/todo/todoSlice";
import { nanoid } from "nanoid";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import s from "../sass/layouts/addTodo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import todoSelector from "@/redux/todo/todoSelector";

export const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errorMessage) => <span className={s.error__add}>{errorMessage}</span>}
    </ErrorMessage>
  );
};

export const useAddToDo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (
    values: FormValuesAdd,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { numberInput, textInput, booleanInput } = values;
    const number = parseInt(numberInput);
    if (!isNaN(number) && textInput.length <= number) {
      const newTodo: Todo = {
        id: nanoid(),
        text: textInput,
        boolean: booleanInput,
      };
      dispatch(addTodo(newTodo));
      toast.success(`Add newTodo`);
      resetForm();
    } else {
      toast.error("Character length should be increased");
    }
  };
  return { handleSubmit };
};

export const useSectionList = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(todoSelector.getTodo);
  const [filterType, setFilterType] = useState("all");
  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
    toast.success(`Todo changed successfully`);
  };
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
    toast.success(`successfully deleted todo`);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filterType) {
      case "completed":
        return todo.boolean;

      case "current":
        return !todo.boolean;
      default:
        return true;
    }
  });
  const all = todos.length;
  const completedCount = todos.filter((todo) => todo.boolean).length;
  const current = all - completedCount;

  return {
    all,
    completedCount,
    current,
    filteredTodos,
    setFilterType,
    filterType,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
