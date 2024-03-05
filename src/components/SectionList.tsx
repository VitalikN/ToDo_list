"use client";

import todoSelector from "@/redux/todo/todoSelector";
import s from "@/sass/layouts/sectionList.module.scss";
import { useSelector } from "react-redux";

const SectionList = () => {
  const todos = useSelector(todoSelector.getTodo);
  console.log(todos);

  return (
    <section className={s.section__list}>
      <div className={s.container}>
        <h1 className={s.title}>List</h1>

        <ul>
          {todos.map((todo, id) => (
            <li key={id}>
              <p>{todo.text}</p>
              <p>{todo.boolean ? "True" : "False"}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default SectionList;
