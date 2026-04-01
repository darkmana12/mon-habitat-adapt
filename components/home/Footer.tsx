import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal px-8 pb-8 pt-12 text-white/50">
      <div className="mx-auto mb-8 grid max-w-[1100px] grid-cols-2 gap-10 min-[900px]:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 font-serif text-xl font-bold text-white no-underline">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage text-lg text-white">🏠</span>
            Mon Habitat Adapt
          </div>
          <p className="mt-4 max-w-[280px] text-[0.85rem] leading-relaxed">
            Le guide indépendant de l&apos;adaptation du logement senior en France. Conseils gratuits, artisans vérifiés, aides expliquées simplement.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.75rem] text-white/60">
              ✓ Infos ANAH vérifiées
            </div>
            <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[0.75rem] text-white/60">
              ✓ Artisans Handibat
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-[0.85rem] font-medium text-white/85">Travaux</h4>
          <ul className="list-none">
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Douche à l&apos;italienne
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Monte-escalier
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Barres d&apos;appui
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Élargissement de porte
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Rampe d&apos;accès
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-[0.85rem] font-medium text-white/85">Aides & financement</h4>
          <ul className="list-none">
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                MaPrimeAdapt&apos;
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Aides ANAH
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                APA à domicile
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                CEE travaux
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Prêt Action Logement
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-sans text-[0.85rem] font-medium text-white/85">Le site</h4>
          <ul className="list-none">
            <li className="mb-2">
              <Link href="/guides" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Tous les guides
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/#quiz" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Simulateur d&apos;aides
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Trouver un artisan
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                À propos
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-[0.82rem] text-white/45 no-underline transition-colors hover:text-white/80">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 text-[0.78rem]">
        <span>© 2025 Mon Habitat Adapt — Conseil indépendant, non affilié à l&apos;ANAH ou au gouvernement</span>
        <span>Fait avec ❤️ pour les 18 millions de seniors français</span>
      </div>
    </footer>
  );
}
