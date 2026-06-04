export function topicSlugFromId(id: string): string {
  const withoutExtension = id.replace(/\.md$/, "");
  const segments = withoutExtension.split("/");
  return segments[segments.length - 1] || withoutExtension;
}
