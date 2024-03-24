import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import postsData from "@/data/posts";

const Home: NextPage = () => {
  const [posts, setPosts] = useState(postsData);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleSubmit = (post: any) => {
    const newPost = {
      id: Date.now(),
      ...post,
    };
    setPosts([...posts, newPost]);
    setShowForm(false);
  };

  useEffect(() => {
    if (showForm) {
      router.push("/");
    }
  }, [showForm]);

  return (
    <div>
      <h1>Blog Posts</h1>
      <button onClick={() => setShowForm(true)}>Add Post</button>
      {showForm && <PostForm onSubmit={handleSubmit} />}
      <PostList posts={posts} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
