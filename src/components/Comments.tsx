import type { Comment } from "@/lib/schema";
import { getCommentsByPostId, postComment } from "@/lib/utils";
import React, { useState, useEffect } from "react";

type CommentProps = {
  postId: string;
};

export default function Comments({ postId }: CommentProps) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const commentData = { username, comment, postId };

    // optimistically update the UI
    setComments((prevComments) => [
      ...prevComments,
      {
        id: Math.random().toString(),
        createdAt: new Date(),
        ...commentData,
      },
    ]);

    // send the comment to the server
    postComment(commentData);
  };

  useEffect(() => {
    // fetch comments when the component mounts
    getCommentsByPostId(postId).then(setComments);
  }, []);

  return (
    <section className="max-w-prose space-y-8">
      <p className="large text-gray-100">
        What do you think? Leave a comment below!
      </p>

      <div className="mb-4 space-y-4">
        {comments
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
          .map((comment) => (
            <div key={comment.id} className="card">
              <header className="flex items-baseline gap-4">
                <h5 className="large m-0 text-blue-200">@{comment.username}</h5>
                <time className="small">
                  {comment.createdAt.toLocaleDateString("en-EN")}
                </time>
              </header>
              <p>{comment.comment}</p>
            </div>
          ))}
      </div>

      <form onSubmit={handleSubmit} className="card space-y-4 bg-transparent">
        <label htmlFor="username" className="block space-y-1">
          <span className="small block">Username</span>
          <input
            type="text"
            id="username"
            name="username"
            required
            maxLength={20}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="card px-4 py-2"
          />
        </label>

        <label htmlFor="comment" className="block space-y-1">
          <span className="small block">Comment</span>
          <textarea
            required
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className="w-full border border-gray-100/10 bg-blue-400 px-4 py-2"
          ></textarea>
        </label>

        <button className="bg-blue-200 px-4 py-2 text-gray-100">Submit</button>
      </form>
    </section>
  );
}
