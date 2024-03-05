"use client";

import { Field, Form, Formik } from "formik";

import { ErrorFeedback, useAddToDo } from "./hooks";
import { validationSchema } from "@/utils/Schema";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "../sass/layouts/addTodo.module.scss";

const AddToDo = () => {
  const { handleSubmit } = useAddToDo();
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
