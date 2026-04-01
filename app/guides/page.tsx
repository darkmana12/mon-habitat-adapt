import Link from "next/link";
import { getAllGuides } from "@/lib/mdx";

export const metadata = {
  title: "Guides | Mon Habitat Adapt",
  description: "Guides et articles sur l'adaptation du logement et les aides.",
};

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  return (
    <div className="mx-auto max-w-3xl px-8 py-16">
      <h1 className="mb-2 font-serif text-4xl text-charcoal">Guides</h1>
      <p className="mb-10 text-textMuted">
        Articles au format MDX (contenu dans <code className="rounded bg-sageLight px-1">content/guides</code>).
      </p>
      <ul className="space-y-4">
        {guides.map(({ slug, frontmatter }) => (
          <li key={slug} className="border-b border-borderDefault pb-4">
            <Link href={`/guides/${slug}`} className="font-serif text-xl text-sage hover:underline">
              {frontmatter.title}
            </Link>
            <p className="mt-1 text-sm text-textMuted">{frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
