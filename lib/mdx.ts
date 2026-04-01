import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guidesDir = path.join(process.cwd(), "content", "guides");

export type GuideFrontmatter = {
  title: string;
  description: string;
  date?: string;
  tag?: string;
};

export function getGuideSlugs(): string[] {
  if (!fs.existsSync(guidesDir)) return [];
  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getGuideBySlug(slug: string): {
  slug: string;
  frontmatter: GuideFrontmatter;
  content: string;
} | null {
  const full = path.join(guidesDir, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as GuideFrontmatter,
    content,
  };
}

export function getAllGuides(): Array<{ slug: string; frontmatter: GuideFrontmatter }> {
  return getGuideSlugs()
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is NonNullable<typeof g> => g !== null)
    .map(({ slug, frontmatter }) => ({ slug, frontmatter }));
}
