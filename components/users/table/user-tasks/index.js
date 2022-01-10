import { Input, List, Space, Typography } from "antd";
import {useState} from "react";
import {TaskContent} from "./task-content";

export const UserTasks = ({ user, handleDeleteTask, handleUpdateTask, handleCreateTask }) => {
  const [task, setTask] = useState("")
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Title level={5}>
        {`Tareas de ${user.name}`}
      </Typography.Title>
      <List
        bordered
        dataSource={user.tasks}
        rowKey={({ rowKey }) => rowKey}
        renderItem={item => (
          <List.Item>
            <TaskContent
              user={user}
              item={item}
              handleDeleteTask={handleDeleteTask}
              handleUpdateTask={handleUpdateTask} />
          </List.Item>
        )} />
      <Input
        value={task}
        placeholder="Agregar nueva tarea"
        onChange={e => setTask(e.target.value)}
        onPressEnter={e => handleCreateTask(e.target.value, setTask, user)} />
    </Space>
  )
}