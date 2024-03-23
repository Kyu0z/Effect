import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserDetailProps {
  user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div>
      <h1 className="text-3xl text-red-600 mb-8 font-bold">User detail</h1>
      <p className="text-2xl my-4 ">Name: {user.name}</p>
      <p className="text-2xl my-4 ">Phone: {user.phone}</p>
      <p className="text-2xl my-4 ">Email: {user.email}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = response.data;
  const paths = users.map((user) => ({
    params: { id: String(user.id) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const response = await axios.get<User[]>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = response.data;
  return { props: { user } };
};

export default UserDetail;
