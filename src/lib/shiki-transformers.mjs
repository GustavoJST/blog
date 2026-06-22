export function transformerTitle() {
  let extractedTitle = ""; // Temporary variable to hold the title between hooks

  return {
    name: "title",
    preprocess(code) {
      if (!code.includes("[title:")) return code;

      const lines = code.split("\n");
      const firstLine = lines[0];
      const titleStart = firstLine.indexOf("[title:");
      const titleEnd = firstLine.indexOf("]", titleStart);

      if (titleStart !== -1 && titleEnd > titleStart) {
        extractedTitle = firstLine.slice(titleStart + 7, titleEnd).trim();
        // Return the code block WITHOUT the title line
        return lines.slice(1).join("\n");
      }
      return code;
    },
    pre(node) {
      if (extractedTitle) {
        // Inject a custom HTML attribute
        node.properties['data-title'] = extractedTitle;
        extractedTitle = ""; // Reset for the next code block!
      }
    }
  };
}