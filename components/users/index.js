import { UsersTable } from "./table"
import {useState} from "react"
import {Form} from "antd";


 const MOCK_USERS = [
   {name:"epito 0", id:12, contact:"012929292", task:[{ description: "to do", id:"2fd1231" }]},
   {name:"epito 1", id:13, contact:"012929293", task:[{ description: "to do", id:"23dsf231" }]},
   {name:"epito 2", id:14, contact:"012929294", task:[{ description: "to do", id:"2312sdf1" }]},
   {name:"epito 3", id:16, contact:"012929295", task:[{ description: "to do", id:"231qwe31" }]},
 ]
export const UsersContent = () => {
  const [users, setUsers] = useState(MOCK_USERS)

  const [createForm] = Form.useForm()
  const [editForm] = Form.useForm()

  const handleDeleteUser = user => {
    setUsers(prev => (
      prev.filter(prevUser => prevUser.id !== user.id)
    ))
  }

  const handleEdit = async (values, row) => {
    await editForm.validateFields()
    setUsers(prev => {
       return  prev.map(user =>
        user.id === row.id ? (
            { ...values, id: row.id }
          ) : (
            user
          )
      )
    })
    editForm.resetFields()
  }

  const handleCreate = async () => {
    await createForm.validateFields()
    const values = createForm.getFieldsValue()
    setUsers(prev => ([
      ...prev, { ...values, id: Math.floor((Math.random() * 1000) + 1) }
    ]))
    createForm.resetFields()
  }

  return (
    <UsersTable
      data={users}
      editForm={editForm}
      createForm={createForm}
      handleEdit={handleEdit}
      handleCreate={handleCreate}
      handleDeleteUser={handleDeleteUser} />
  )
}