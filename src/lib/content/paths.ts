import { join, resolve } from "node:path";

export const APP_FOLDER = resolve(process.cwd(), "src", "app");

export const POSTS_FOLDER = join(APP_FOLDER, "blog", "(posts)");
