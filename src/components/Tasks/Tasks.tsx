import axios from "axios";
import { useState } from "react";
import Button from "../Button/Button";
import { error } from "console";

type Task = {
  id: string;
  title: string;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>("error");

  const handleClick = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(data);
      setErrorMsg(null);
    } catch (error: any) {
      setErrorMsg("error");
    }
  };

  return (
    <div>
      <h1>Tasks for API</h1>
      <Button disable={false} onClick={handleClick}>
        Get tasks from API
      </Button>

      {tasks.length > 0 ? (
        tasks.map((task: Task) => <h2 key={task.id}>{task.title}</h2>)
      ) : (
        <h2>{errorMsg}</h2>
      )}
    </div>
  );
};

export default Tasks;
