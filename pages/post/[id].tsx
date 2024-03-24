import { NextPage } from "next";
import { useRouter } from "next/router";
import postsData from "@/data/posts";

const PostDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = postsData.find((post) => post.id === parseInt(id as string));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
