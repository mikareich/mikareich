import { asc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { Button } from "~/components/form/button";
import { Input } from "~/components/form/input";
import { cn } from "~/lib/cn";
import { comments } from "~/lib/db/comments";
import db from "~/lib/db/db";

type CommentProps = Omit<React.ComponentProps<"section">, "children"> & {
  postId: string;
};

const postComment = (postId: string) => async (formData: FormData) => {
  "use server";

  const username = formData.get("username")?.toString();
  const comment = formData.get("comment")?.toString();
  if (!username || !comment) return;

  await db.insert(comments).values({ comment, postId, username });
  revalidatePath(`/blog${postId}`);
};

export default async function Comments({
  className,
  postId,
  ...props
}: CommentProps) {
  const usernameId = `${postId}-username`;
  const commentId = `${postId}-comment`;
  const allComments = await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))
    .orderBy(asc(comments.createdAt));

  return (
    <form action={postComment(postId)} className="space-y-4">
      {allComments.map((comment) => (
        <p key={comment.id} className="italic">
          <span className="text-action not-italic text-theme-primary">
            [{comment.username}]
          </span>{" "}
          {comment.comment}
        </p>
      ))}

      <label className="block" htmlFor={usernameId}>
        <span className="sr-only">Username</span>
        <Input className="w-full" placeholder="Username" />
      </label>

      <label className="block" htmlFor={commentId}>
        <span className="sr-only">Comment</span>
        <Input className="w-full" placeholder="Comment" />
      </label>

      <Button type="submit">Submit</Button>
    </form>
  );
}
