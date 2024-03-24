import { FC } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
}

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: FC<Props> = ({ posts, onDelete }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
