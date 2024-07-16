import skillMap from "../content/data/skills.json";
import projects from "../content/data/projects.json";
import type { Comment } from "@/lib/schema";

export { skillMap, projects };

export const skills = skillMap.map((skill) => skill.name);

export const router = [
  { title: "About me", slug: "/" },
  { title: "Projects", slug: "/projects" },
  { title: "Blog", slug: "/blog" },
] as const;

export const socials = {
  email: "mikareich0@gmail.com",
  github: "https://github.com/mikareich",
  discord: "https://discordapp.com/users/708739192678514780",
};

export const getCommentsByPostId = async (postId: string) => {
  const response = await fetch(`/api/comments?postId=${postId}`);

  const comments = (await response.json()) as Comment[];

  // convert createdAt back to a Date object
  return comments.map((c) => ({ ...c, createdAt: new Date(c.createdAt) }));
};

export type CommentData = {
  username: string;
  comment: string;
  postId: string;
};

export const postComment = async (comment: CommentData) => {
  const response = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(comment),
  });

  return response.json() as Promise<Comment>;
};
