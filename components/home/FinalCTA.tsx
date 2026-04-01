import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="bg-sage px-8 py-20 text-center" id="devis">
      <h2 className="mx-auto mb-4 max-w-[600px] font-serif text-[2.5rem] text-white">
        Prêt à adapter votre logement ?
      </h2>
      <p className="mx-auto mb-10 max-w-[500px] text-white/75">
        Obtenez jusqu&apos;à 3 devis d&apos;artisans agréés ANAH près de chez vous, et une estimation précise de vos aides en moins de 2 minutes.
      </p>
      <Link
        href="#quiz"
        className="inline-block rounded-lg bg-white px-9 py-4 text-base font-medium text-sageDark no-underline transition-all hover:-translate-y-0.5 hover:opacity-90"
      >
        Calculer mes aides — c&apos;est gratuit
      </Link>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
        <span className="flex items-center gap-1.5 text-[0.82rem] text-white/65">🔒 Aucun engagement</span>
        <span className="flex items-center gap-1.5 text-[0.82rem] text-white/65">⚡ Réponse sous 48h</span>
        <span className="flex items-center gap-1.5 text-[0.82rem] text-white/65">✓ Artisans vérifiés Handibat</span>
        <span className="flex items-center gap-1.5 text-[0.82rem] text-white/65">🚫 Zéro démarchage abusif</span>
      </div>
    </section>
  );
}
