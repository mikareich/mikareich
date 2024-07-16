import db from "@/lib/db";
import { comments } from "@/lib/schema";
import type { CommentData } from "@/lib/utils";
import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const postId = url.searchParams.get("postId");

  const allComments = await db
    .select()
    .from(comments)
    .where(postId ? eq(comments.postId, postId) : undefined);

  return new Response(JSON.stringify(allComments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const commentData = (await request.json()) as CommentData;

  try {
    const [comment] = await db.insert(comments).values(commentData).returning();

    return new Response(JSON.stringify(comment), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};
