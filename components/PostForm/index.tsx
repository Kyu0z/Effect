import { FC, useState } from "react";

interface Post {
  title: string;
  body: string;
}

interface Props {
  onSubmit: (post: Post) => void;
}

const PostForm: FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
