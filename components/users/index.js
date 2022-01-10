import { UsersTable } from "./table"
import {useState} from "react"
import {Form} from "antd";


 const MOCK_USERS = [
   { name: "Pepito 0", id: 12, contact: "012929292", tasks:[{ description: "Crear repositorio", id: "2fd1231" }, { description: "to do 2", id: "2fddsa1231" }] },
   { name: "Pepito 1", id: 13, contact: "012929293", tasks:[{ description: "Instalar dependencias", id: "23dsf231" }] },
   { name: "Pepito 2", id: 14, contact: "012929294", tasks:[{ description: "Crear layout", id: "2312sdf1" }] },
   { name: "Pepito 3", id: 16, contact: "012929295", tasks:[{ description: "Crear tabla", id: "231qwe31" }] },
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
      ...prev, { ...values, id: Math.floor((Math.random() * 1000) + 1), tasks: [] }
    ]))
    createForm.resetFields()
  }

  const handleUpdateTask = ({value, user, setEditTask, item, setIsEditing}) => {
    if (value === (""||" ")) return
    setUsers(prev => {
      const index = users.findIndex(userState => userState.id === user.id)
      const toUpdateTask = users[index].tasks
      const newTask = toUpdateTask.map(task =>
        task.id === item.id ? (
          {...task, description: value}
        ) : (
          task
        )
      )

      return prev.map( prevUser =>
        prevUser.id === user.id ? (
          {...user, tasks: newTask}
        ) : (
          prevUser
        )
      )
    })
    setIsEditing(false)
    setEditTask("")
  }

  const handleDeleteTask = (task, user) => {
    setUsers(prev => {
      const index = users.findIndex(userState => userState.id === user.id)
      const newTask = users[index].tasks.filter(taskToFilter => taskToFilter.id !== task.id)

      return prev.map( prevUser =>
        prevUser.id === user.id ? (
          {...user, tasks: newTask}
        ) : (
          prevUser
        )
      )

    })
  }

  const handleCreateTask = (task, setState, user) => {
    if (task === (""||" ")) return
    setUsers(prev => {
      const index = users.findIndex(userState => userState.id === user.id)
      const newTask = users[index].tasks
      newTask.push({description: task, id: Math.floor((Math.random() * 1000) + 1) })

      return prev.map( prevUser =>
        prevUser.id === user.id ? (
          {...user, tasks: newTask}
        ) : (
          prevUser
        )
      )
    })
    setState("")
  }

  return (
    <UsersTable
      data={users}
      editForm={editForm}
      createForm={createForm}
      handleEdit={handleEdit}
      handleCreate={handleCreate}
      handleCreateTask={handleCreateTask}
      handleDeleteUser={handleDeleteUser}
      handleUpdateTask={handleUpdateTask}
      handleDeleteTask={handleDeleteTask} />
  )
}