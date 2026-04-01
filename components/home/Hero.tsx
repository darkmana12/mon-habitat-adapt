import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-warmWhite">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-8 pb-[90px] pt-20 min-[901px]:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-goldBorder bg-goldLight px-3.5 py-1.5 text-[0.82rem] font-medium text-gold">
            <span>🛡️</span>
            <span>Conseil indépendant & gratuit</span>
          </div>
          <h1 className="mb-5 font-serif text-[2.4rem] font-bold leading-[1.15] text-charcoal min-[901px]:text-[3.2rem]">
            Adaptez votre logement,
            <br />
            <em className="not-italic text-sage">vivez chez vous</em>
            <br />
            en toute sécurité
          </h1>
          <p className="mb-8 max-w-[480px] text-[1.1rem] font-light text-textMuted">
            Douche italienne, monte-escalier, barres d&apos;appui. On vous explique les aides disponibles et on vous met en contact avec les bons artisans agréés ANAH.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#quiz"
              className="inline-block rounded-lg bg-terracotta px-7 py-3.5 text-[0.95rem] font-medium text-white no-underline transition-all hover:-translate-y-px hover:bg-terracottaHover"
            >
              Calculer mes aides gratuitement
            </Link>
            <Link
              href="#services"
              className="inline-block rounded-lg border-[1.5px] border-sage bg-transparent px-7 py-3.5 text-[0.95rem] font-medium text-sageDark no-underline transition-all hover:bg-sageLight"
            >
              Voir nos guides
            </Link>
          </div>
          <div className="mt-10 flex gap-8 border-t border-borderDefault pt-8">
            <div className="flex flex-col">
              <span className="font-serif text-[1.6rem] font-bold text-sage">18M</span>
              <span className="text-[0.8rem] font-normal text-textMuted">seniors en France</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[1.6rem] font-bold text-sage">70%</span>
              <span className="text-[0.8rem] font-normal text-textMuted">de financement possible</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[1.6rem] font-bold text-sage">48h</span>
              <span className="text-[0.8rem] font-normal text-textMuted">pour recevoir un devis</span>
            </div>
          </div>
        </div>

        <div className="relative hidden min-[901px]:block">
          <div className="relative overflow-hidden rounded-[20px] bg-sage p-10 text-white">
            <span className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full bg-white/[0.07]" />
            <span className="pointer-events-none absolute -bottom-[60px] -left-[30px] h-[220px] w-[220px] rounded-full bg-white/[0.05]" />
            <span className="relative z-[1] mb-4 block text-[3.5rem]">🚿</span>
            <h3 className="relative z-[1] mb-2 text-2xl text-white">Remplacement baignoire</h3>
            <p className="relative z-[1] mb-6 text-[0.9rem] opacity-85">
              Transformez votre baignoire en douche à l&apos;italienne sécurisée avec barre d&apos;appui et receveur antidérapant.
            </p>
            <span className="relative z-[1] inline-block rounded-md bg-gradient-to-br from-warmGold to-warmGoldDeep px-5 py-2.5 text-[0.95rem] font-medium text-white shadow-sm sm:text-base">
              ✓ Éligible MaPrimeAdapt&apos;
            </span>
          </div>
          <div className="absolute -right-5 top-5 rounded-xl bg-white px-[18px] py-3.5 text-[0.82rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="block text-[0.75rem] text-textMuted">Aide estimée</span>
            <span className="text-base font-medium text-charcoal">jusqu&apos;à 5 800 €</span>
          </div>
        </div>
      </div>
    </section>
  );
}
