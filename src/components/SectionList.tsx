"use client";
import { useSectionList } from "./hooks";

import { MdDeleteForever } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import s from "@/sass/layouts/sectionList.module.scss";
import Link from "next/link";

const SectionList = () => {
  const {
    all,
    completedCount,
    current,
    filteredTodos,
    filterType,
    handleDeleteTodo,
    handleToggleTodo,
    setFilterType,
  } = useSectionList();

  return (
    <section className={s.section__list}>
      <div className={s.container}>
        <h1 className={s.title}>List todo</h1>
        {all > 0 ? (
          <>
            <div className={s.box__btn}>
              <button
                className={`${s.btn} ${filterType === "all" ? s.active : ""}`}
                onClick={() => setFilterType("all")}
              >
                All
              </button>
              <button
                className={`${s.btn} ${
                  filterType === "completed" ? s.active : ""
                }`}
                onClick={() => setFilterType("completed")}
              >
                Completed
              </button>
              <button
                className={`${s.btn} ${
                  filterType === "current" ? s.active : ""
                }`}
                onClick={() => setFilterType("current")}
              >
                Current
              </button>
            </div>
            <ul className={s.list}>
              {filteredTodos.map(({ text, id, boolean }) => (
                <li
                  className={s.list__item}
                  key={id}
                  onClick={() => handleToggleTodo(id)}
                >
                  <p className={s.list__text}>{text}</p>

                  <div className={s.box__boolean}>
                    <p
                      className={s.boolean}
                      onClick={() => handleToggleTodo(id)}
                    >
                      {boolean ? "Completed" : "Not completed"}
                    </p>
                    <MdDeleteForever
                      className={s.list__icon}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTodo(id);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className={s.stats}>
              <p>All: {all}</p>
              <p>Completed: {completedCount}</p>
              <p>current: {current}</p>
            </div>
          </>
        ) : (
          <Link href="/add_todo" className={s.link__create}>
            Create todo
          </Link>
        )}
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
export default SectionList;
