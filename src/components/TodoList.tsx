import { Todo } from "@/types";
import { Divider, List, Typography } from "antd";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <>
      <List
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
            actions={[
              <button onClick={() => toggleTodo(item.id)}>切换状态</button>,
              <button onClick={() => deleteTodo(item.id)}>删除</button>,
            ]}
          >
            {item.text}
          </List.Item>
        )}
      />
    </>
  );
}

export default TodoList;
