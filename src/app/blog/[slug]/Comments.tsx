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

  await db.insert(comments).values({ comment, postId, username });
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
      <p className="mb-2 text-portfolio-text-strong text-lg sm:text-xl">
        What do you think? Leave a comment below!
      </p>

      <div className="mb-4 space-y-4">
        {allComments.map((comment) => (
          <div className="card" key={comment.id}>
            <header className="flex items-baseline gap-4">
              <h5 className="text-theme-primary text-lg sm:text-xl">
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
        <label className="block space-y-1">
          <span className="mb-2 block font-thin text-sm uppercase">
            Username
          </span>
          <input
            className="card w-full px-4 py-2 focus-visible:outline-none focus-visible:outlined"
            maxLength={20}
            name="username"
            required
            type="text"
          />
        </label>

        <label className="block space-y-1">
          <span className="mb-2 block font-thin text-sm uppercase">
            Comment
          </span>
          <textarea
            className="w-full border border-theme-border bg-theme-bg-accent px-4 py-2 focus-visible:outline-none focus-visible:outlined"
            name="comment"
            required
          />
        </label>

        <button
          className="bg-theme-primary px-4 py-2 text-theme-foreground focus-visible:outline-none focus-visible:outlined"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
