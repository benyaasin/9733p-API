import React from "react"

interface UsersPageProps {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const usersLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users;
}
   
function UsersPage() {

  return (
    <div>UsersPage</div>
  )
}

export default UsersPage