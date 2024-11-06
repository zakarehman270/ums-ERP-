"use client"
import { useGetPostsQuery } from "@/app/store/api/apiSlice";
export default function Hello() {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}