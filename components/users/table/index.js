import {Button, Space, Table, Popover} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import {TitleTable} from "./title-table";
import {UserForm} from "../user-form";
import {UserTasks} from "./user-tasks";

export const UsersTable = ({
  data,
  editForm,
  handleEdit,
  createForm,
  handleCreate,
  handleDeleteUser,
  handleDeleteTask,
  handleUpdateTask,
  handleCreateTask
}) => (
  <Table
    dataSource={data}
    expandable={{
      expandedRowRender: row =>
        <UserTasks
          user={ row }
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleUpdateTask}
          handleCreateTask={handleCreateTask}
        />
    }}
    title={() => (
      <TitleTable handleCreate={handleCreate} form={createForm}/>
    )}
    rowKey={row => row.id}>
    <Table.Column title="Nombre" dataIndex="name"/>
    <Table.Column title="Número de usuario" dataIndex="id"/>
    <Table.Column title="Número de telefono" dataIndex="contact"/>
    <Table.Column
      width={50}
      render={ row => (
        <Space direction="horizontal">
          <Popover
            trigger="click"
            placement="right"
            destroyTooltipOnHide={true}
            content={() => (
              <UserForm
                row={row}
                form={editForm}
                onSave={handleEdit}
                title="Editar usuario" />
            )}>
            <Button
              type="link"
              icon={<EditOutlined />} />
          </Popover>
          <Button
            danger
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(row)} />
        </Space>
      )} />
  </Table>
)
