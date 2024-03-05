"use client";

import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todo/todoSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Todo } from "@/redux/todo/todoSlice";
import { nanoid } from "nanoid";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import s from "../sass/layouts/addTodo.module.scss";

const validationSchema = Yup.object().shape({
  numberInput: Yup.number()
    .required("Character length is required!")
    .positive()
    .integer(),
  textInput: Yup.string().required("This field is required!"),
});

export interface ErrorFeedbackProps {
  name: string;
}
type FormValuesAdd = {
  numberInput: string;
  textInput: string;
  booleanInput: boolean;
};

const AddToDo = () => {
  const dispatch = useDispatch();
  const id = nanoid();
  const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={s.error__add}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };

  const handleSubmit = (
    values: FormValuesAdd,
    { resetForm }: { resetForm: () => void }
  ) => {
    const { numberInput, textInput, booleanInput } = values;
    const number = parseInt(numberInput);
    if (!isNaN(number) && textInput.length <= number) {
      const newTodo: Todo = {
        id,
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

  return (
    <section className={s.section__add__todo}>
      <div className={`${s.container} ${s.container__todo}`}>
        <h2 className={s.title}>Add todo</h2>
        <Formik
          initialValues={{
            numberInput: "",
            textInput: "",
            booleanInput: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={s.form}>
              <div className={s.form__box}>
                <Field
                  className={s.input}
                  type="number"
                  name="numberInput"
                  placeholder="Character length todo"
                  error={touched.numberInput && errors.numberInput}
                />
                <ErrorFeedback name="numberInput" />
              </div>

              <div className={s.form__box}>
                <Field
                  className={s.input}
                  placeholder="Enter todo"
                  type="text"
                  name="textInput"
                  error={touched.textInput && errors.textInput}
                />
                <ErrorFeedback name="textInput" />
              </div>

              <button className={s.styledBtn} type="submit">
                Add Todo
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          theme="light"
        />
      </div>
    </section>
  );
};
export default AddToDo;
