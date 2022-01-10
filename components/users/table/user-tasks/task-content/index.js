import {Button, Col, Input, Row, Typography} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useState} from "react";

export const TaskContent = ({ handleUpdateTask, user, item, handleDeleteTask }) => {

  const [editTask, setEditTask] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Row style={{ width: "100%" }} align="middle">
      <Col span={20}>
        {isEditing ? (
          <Input
            value={editTask}
            onChange={e => setEditTask(e.target.value)}
            onPressEnter={e => handleUpdateTask({value: e.target.value, user, setEditTask, item, setIsEditing})} />
        ) : (
          <Typography.Paragraph ellipsis={{ rows: 1 }}>
            {item.description}
          </Typography.Paragraph>
        )
        }
      </Col>
      <Col span={2}>
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => {
            setEditTask(item.description)
            setIsEditing(true)
          }} />
      </Col>
      <Col span={2}>
        <Button
          danger
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteTask(item, user)} />
      </Col>
    </Row>
  )
}