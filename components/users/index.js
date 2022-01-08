import { UsersTable } from "./table";
 const MOCK_USERS = [
   {name:"epito 0", id:12, contact:"012929292"},
   {name:"epito 1", id:13, contact:"012929293"},
   {name:"epito 2", id:14, contact:"012929294"},
   {name:"epito 3", id:16, contact:"012929295"},
 ]
export const UsersContent = () => {
  const handleDeleteUser = () => {
    console.log("delete")
  }

  const handleEdit = () => {
    console.log("edit")
  }

  return (
    <UsersTable
      data={MOCK_USERS}
      handleEdit={handleEdit}
      handleDeleteUser={handleDeleteUser} />
  )
}