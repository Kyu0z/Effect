import { User, UserProps } from "@/models/user";
import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

const Users: React.FC<UserProps> = ({ users }) => {
  return (
    <div>
      <h1 className="text-3xl text-red-600 mb-8 font-bold">User list</h1>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`}>
            <li className="text-2xl my-4 cursor-pointer" key={user.id}>
              {user.name} - {user.email} - {user.phone}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<UserProps> = async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = response.data;
  return { props: { users } };
};

export default Users;
