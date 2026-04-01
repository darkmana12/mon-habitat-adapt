import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuideBySlug, getGuideSlugs } from "@/lib/mdx";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const g = getGuideBySlug(params.slug);
  if (!g) return { title: "Guide introuvable" };
  return {
    title: `${g.frontmatter.title} | Mon Habitat Adapt`,
    description: g.frontmatter.description,
  };
}

export default function GuidePage({ params }: Props) {
  const g = getGuideBySlug(params.slug);
  if (!g) notFound();

  return (
    <article className="mx-auto max-w-3xl px-8 py-16">
      <p className="mb-6 text-sm">
        <Link href="/guides" className="text-sage hover:underline">
          ← Tous les guides
        </Link>
      </p>
      {g.frontmatter.tag && (
        <p className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-terracotta">{g.frontmatter.tag}</p>
      )}
      <h1 className="mb-6 font-serif text-4xl text-charcoal">{g.frontmatter.title}</h1>
      <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-sage">
        <MDXRemote source={g.content} />
      </div>
    </article>
  );
}
