import Link from "next/link";

export function Services() {
  return (
    <section className="mx-auto max-w-[1320px] px-8 py-20" id="services">
      <div className="mb-12 text-center">
        <span className="mb-3 block text-[0.88rem] font-medium uppercase tracking-[0.12em] text-sage sm:text-[0.92rem]">
          Nos domaines
        </span>
        <h2 className="mb-3 font-serif text-[2.4rem]">Tout pour adapter votre logement</h2>
        <p className="mx-auto max-w-[560px] text-[1.05rem] text-textMuted">
          Des guides complets, des conseils sur les aides et des artisans vérifiés pour chaque type de travaux.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 min-[900px]:grid-cols-3" id="douche">
        <Link href="#" className="flex flex-col overflow-hidden rounded-2xl border border-borderDefault bg-white text-inherit no-underline transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
          <div className="flex-1 px-8 pb-6 pt-8">
            <h3 className="mb-2 font-sans text-[1.125rem] font-medium leading-snug text-charcoal sm:text-[1.2rem]">
              Douche senior & remplacement de baignoire
            </h3>
            <p className="mb-5 text-[0.88rem] leading-relaxed text-textMuted">
              46% des chutes de seniors se produisent dans la salle de bain. Découvrez comment remplacer votre baignoire par une douche à l&apos;italienne sécurisée avec barre d&apos;appui, siège et receveur antidérapant.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full border border-goldBorder bg-goldLight px-2.5 py-1 text-[0.75rem] text-gold">✓ MaPrimeAdapt&apos;</span>
              <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Jacob Delafon</span>
              <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Kinedo</span>
              <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Devis gratuit</span>
              <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Artisans agréés</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-borderDefault bg-cream px-8 py-5">
            <div className="text-[0.82rem] text-textMuted">
              À partir de <strong className="text-base text-charcoal">2 500 €</strong> après aides
            </div>
            <span className="flex items-center gap-1 text-[0.85rem] font-medium text-sage">Tout savoir →</span>
          </div>
        </Link>

        <Link href="#" className="flex flex-col overflow-hidden rounded-2xl border border-borderDefault bg-white text-inherit no-underline transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]" id="monte">
          <div className="flex-1 px-8 pb-6 pt-8">
            <h3 className="mb-2 font-sans text-[1.125rem] font-medium leading-snug text-charcoal sm:text-[1.2rem]">
              Monte-escalier & élévateur
            </h3>
            <p className="mb-5 text-[0.88rem] leading-relaxed text-textMuted">
              La solution pour rester dans votre maison à étage. Commissions 100–200€/lead — nos meilleures recommandations.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full border border-goldBorder bg-goldLight px-2.5 py-1 text-[0.75rem] text-gold">✓ Éligible aides</span>
              <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">Intérieur & extérieur</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-borderDefault bg-cream px-8 py-5">
            <div className="text-[0.82rem] text-textMuted">
              Devis de <strong className="text-base text-charcoal">3 000 – 15 000 €</strong>
            </div>
            <span className="flex items-center gap-1 text-[0.85rem] font-medium text-sage">Comparer →</span>
          </div>
        </Link>

        <Link href="#" className="flex flex-col overflow-hidden rounded-2xl border border-borderDefault bg-white text-inherit no-underline transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]" id="aides">
          <div className="flex-1 px-8 pb-6 pt-8">
            <h3 className="mb-2 font-sans text-[1.125rem] font-medium leading-snug text-charcoal sm:text-[1.2rem]">
              Aides & subventions 2025
            </h3>
            <p className="mb-5 text-[0.88rem] leading-relaxed text-textMuted">
              MaPrimeAdapt&apos;, CEE, aide de l&apos;ANAH, APA… on décrypte tout ce à quoi vous avez droit.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full border border-goldBorder bg-goldLight px-2.5 py-1 text-[0.75rem] text-gold">Jusqu&apos;à 70%</span>
              <span className="rounded-full border border-borderDefault bg-cream px-2.5 py-1 text-[0.75rem] text-textMuted">ANAH agréé</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-borderDefault bg-cream px-8 py-5">
            <div className="text-[0.82rem] text-textMuted">
              Guide <strong className="text-base text-charcoal">100% gratuit</strong>
            </div>
            <span className="flex items-center gap-1 text-[0.85rem] font-medium text-sage">Lire le guide →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
