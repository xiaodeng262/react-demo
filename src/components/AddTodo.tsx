import { useState } from "react";
import { Input } from "antd";
import { Button, Flex } from "antd";

interface AddTodoProps {
  addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="请输入事项。"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size={"large"}
        style={{ width: "30%" }}
      />
      <Button type="primary" htmlType="submit" size={"large"} style={{marginLeft: "10px"}}>
        添加
      </Button>
    </form>
  );
}

export default AddTodo;
