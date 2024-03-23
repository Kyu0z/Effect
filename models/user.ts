export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface UserProps {
  users: User[];
}

export interface UserDetailProps {
  user: User[];
}
