import { Button, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

export const UsersTable = ({ data, handleEdit, handleDeleteUser }) => (
  <Table dataSource={data} rowKey={row => row.id}>
    <Table.Column title="Nombre" dataIndex="name"/>
    <Table.Column title="#Usuario" dataIndex="id"/>
    <Table.Column title="Numero de telefono" dataIndex="contact"/>
    <Table.Column
      width={50}
      render={ row => (
        <Space direction="horizontal">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(row)} />
          <Button
            danger
            type="link"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(row)} />
        </Space>
      )} />
  </Table>
)
