"use client";
import AddTodo from "@/components/AddTodo";
import TodoFilter from "@/components/TodoFilter";
import TodoList from "@/components/TodoList";
import { useState } from "react";
import { Todo } from "@/types";

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");

  const addTodo = (text: string) => {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  /**
   * 删除代办
   * @param id 
   */
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * 切换代办
   * @param id 
   */
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  /**
   * 获取过滤后的代办
   */
  const getFilteredTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <h1>TodeList</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList
        todos={getFilteredTodos()}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      ></TodoList>
      <TodoFilter setFilter={setFilter}></TodoFilter>
    </div>
  );
}
