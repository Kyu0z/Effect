import React from "react";
import { User } from "../types/userTypes";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      <h2 className="text-3xl text-red-600 font-bold">User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="text-2xl my-4">
            {user.name} - {user.phone} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
