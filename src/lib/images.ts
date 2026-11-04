import { existsSync } from "fs";
import { join } from "path";

export function imageExists(publicPath: string): boolean {
  try {
    return existsSync(join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}
