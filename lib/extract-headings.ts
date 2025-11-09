// lib/extractHeadings.ts
export function extractHeadings(source: string) {
  // Match ## headings (H2) and ### headings (H3) in markdown
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { text: string; id: string; level: number }[] = [];
  let match;

  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1].length; // Count the # symbols
    const text = match[2]
      .trim()
      .replace(/\*\*/g, "") // Remove bold markers
      .replace(/`/g, ""); // Remove code markers

    // Create slug-friendly ID (matching rehype-slug behavior)
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Keep only alphanumeric, spaces, and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single
      .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
      .trim();

    headings.push({ text, id, level });
  }

  return headings;
}
