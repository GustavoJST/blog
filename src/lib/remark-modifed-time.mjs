import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (tree, file) {
    const filepath = file.history[0];

    const dateResult = execSync(
      `git log -1 --pretty="format:%cI" "${filepath}"`,
    );
    file.data.astro.frontmatter.lastModified = dateResult.toString().trim();

    try {
      const countResult = execSync(
        `git rev-list --count HEAD -- "${filepath}"`,
      );
      file.data.astro.frontmatter.commitCount = parseInt(
        countResult.toString().trim(),
        10,
      );
      const commitfullHash = execSync(
        `git log -1 --pretty="format:%H" "${filepath}"`,
      )
        .toString()
        .trim();
      file.data.astro.frontmatter.commitFullHash = commitfullHash;
    } catch (e) {
      file.data.astro.frontmatter.commitCount = 1;
    }
  };
}
