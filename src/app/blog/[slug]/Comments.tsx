import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { comments } from "~/lib/comments";
import db from "~/lib/db";

type CommentProps = {
  postId: string;
};

const postComment = (postId: string) => async (formData: FormData) => {
  "use server";

  const username = formData.get("username")?.toString();
  const comment = formData.get("comment")?.toString();
  if (!username || !comment) return;

  await db.insert(comments).values({ username, comment, postId });
  revalidatePath(`/blog/${postId}`);
};

export default async function Comments({ postId }: CommentProps) {
  const allComments = await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))
    .orderBy(asc(comments.createdAt));

  return (
    <section className="max-w-prose space-y-8">
      <p className="mb-2 text-gray-100 text-lg sm:text-xl">
        What do you think? Leave a comment below!
      </p>

      <div className="mb-4 space-y-4">
        {allComments.map((comment) => (
          <div key={comment.id} className="card">
            <header className="flex items-baseline gap-4">
              <h5 className="text-blue-200 text-lg sm:text-xl">
                @{comment.username}
              </h5>
              <time className="mb-2 font-thin text-sm uppercase">
                {comment.createdAt.toLocaleDateString("en-EN")}
              </time>
            </header>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>

      <form
        action={postComment(postId)}
        className="card space-y-4 bg-transparent"
      >
        <label htmlFor="username" className="block space-y-1">
          <span className="mb-2 block font-thin text-sm uppercase">
            Username
          </span>
          <input
            type="text"
            id="username"
            name="username"
            required
            maxLength={20}
            className="card px-4 py-2"
          />
        </label>

        <label htmlFor="comment" className="block space-y-1">
          <span className="mb-2 block font-thin text-sm uppercase">
            Comment
          </span>
          <textarea
            required
            name="comment"
            className="w-full border border-gray-100/10 bg-blue-400 px-4 py-2"
          />
        </label>

        <button type="submit" className="bg-blue-200 px-4 py-2 text-gray-100">
          Submit
        </button>
      </form>
    </section>
  );
}
