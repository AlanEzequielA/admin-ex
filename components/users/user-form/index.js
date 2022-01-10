import {Button, Form, Input, Space, Typography} from "antd";
import {useEffect} from "react";

export const UserForm = ({ form, title, onSave, row = [] }) => {
  useEffect(() => {
    if (row.length) {
      form.resetFields()
      return
    }
    form.setFieldsValue(row)
  },[row])

  return (
    <Form
      labelWrap
      form={form}
      labelAlign="left"
      onFinish={values => onSave(values, row)}>
      <Typography.Title level={5}>
        {title}
      </Typography.Title>
      <Space direction="vertical" align="end">
        <Form.Item
          name="name"
          label="Nombre"
          rules={[{ required: true, message: "Favor de ingresar su nombre" }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="contact"
          label="Número de telefono"
          rules={[{ required: true, message: 'Favor de ingresar su número' }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" danger>Guardar</Button>
        </Form.Item>
      </Space>
    </Form>
  )
}