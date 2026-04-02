import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal px-8 pb-8 pt-12 text-white/50">
      <div className="mx-auto mb-8 grid max-w-[1100px] grid-cols-1 gap-10 min-[900px]:grid-cols-[2fr_1fr] min-[900px]:items-center">
        <div>
          <div className="flex items-center gap-2.5 font-serif text-xl font-bold text-white no-underline">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage text-lg text-white">🏠</span>
            Mon Habitat Adapt
          </div>
        </div>

        <nav
          aria-label="Informations légales"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.82rem] min-[900px]:justify-end"
        >
          <Link href="#" className="whitespace-nowrap text-white/45 no-underline transition-colors hover:text-white/80">
            Mentions légales
          </Link>
          <span className="text-white/25" aria-hidden>
            ·
          </span>
          <Link href="#" className="whitespace-nowrap text-white/45 no-underline transition-colors hover:text-white/80">
            Politique de confidentialité
          </Link>
        </nav>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 text-[0.78rem]">
        <span>© 2026 Mon Habitat Adapt — Conseil indépendant, sans lien avec l&apos;ANAH ou le gouvernement</span>
        <span>Fait avec ❤️ pour les 18 millions de seniors français</span>
      </div>
    </footer>
  );
}
