const introProseClass =
  "text-[0.98rem] leading-[1.65] text-textMuted sm:text-[1.05rem]";

const travauxInterieur = [
  { icon: "🪜", label: "Monte-escalier électrique" },
  { icon: "🚿", label: "Douche italienne" },
  { icon: "🚽", label: "WC surélevés et barre d'appui" },
  { icon: "💡", label: "Éclairage à détection de mouvement" },
] as const;

const travauxExterieur = [
  { icon: "♿", label: "Rampe d'accès extérieur" },
  { icon: "🪟", label: "Installation de volets roulants électriques" },
  { icon: "🚪", label: "Élargissement de la porte d'entrée" },
] as const;

/** Bloc explicatif MaPrimeAdapt' — placé avant la section domaines */
export function MaPrimeAdaptIntro() {
  return (
    <section
      className="w-full border-b border-borderDefault bg-warmWhite"
      id="maprimeadapt"
      aria-labelledby="maprimeadapt-title"
    >
      <div className="mx-auto max-w-[1320px] px-8 py-16 text-center sm:py-20">
        <h2
          id="maprimeadapt-title"
          className="mx-auto mb-5 max-w-[720px] font-sans text-[1.65rem] font-bold leading-[1.15] tracking-tight text-charcoal sm:mb-6 sm:text-[1.85rem] lg:text-[2rem]"
        >
          MaPrimeAdapt&apos;, c&apos;est quoi ?
        </h2>

        <p className={`mx-auto mb-10 max-w-[720px] sm:mb-12 ${introProseClass}`}>
          Depuis le 1<sup>er</sup> janvier 2024,{" "}
          <strong className="font-semibold text-charcoal">MaPrimeAdapt&apos;</strong> est l&apos;aide unique pour financer
          les travaux d&apos;adaptation du logement. Sous conditions d&apos;attribution, elle simplifie les démarches et
          vise à permettre aux personnes en situation de handicap ou en perte d&apos;autonomie de rester vivre à domicile.
        </p>

        <h3
          id="maprimeadapt-pour-qui"
          className="mx-auto mb-4 max-w-[720px] font-sans text-[1.35rem] font-bold leading-tight text-charcoal sm:mb-5 sm:text-[1.5rem]"
        >
          Pour qui ?
        </h3>
        <p className={`mx-auto mb-10 max-w-[720px] sm:mb-12 ${introProseClass}`}>
          Elle s&apos;adresse aux personnes âgées de plus de 60 ans, et aux personnes en situation de handicap — pour
          ces dernières, sans condition d&apos;âge.
        </p>

        <h3
          id="maprimeadapt-travaux"
          className="mx-auto mb-4 max-w-[720px] font-sans text-[1.35rem] font-bold leading-tight text-charcoal sm:mb-5 sm:text-[1.5rem]"
        >
          Quels types de travaux sont concernés ?
        </h3>
        <div className="mb-10 mx-auto max-w-[720px] sm:mb-12">
          <p className={`mb-5 ${introProseClass}`}>
            Pour la sécurité et le confort du logement, les travaux d&apos;adaptation peuvent concerner l&apos;intérieur
            ou l&apos;extérieur. Quelques exemples :
          </p>

          <div
            className="overflow-hidden rounded-xl border border-borderDefault bg-cream/50 text-left shadow-[0_2px_12px_rgba(42,42,40,0.05)]"
            role="group"
            aria-label="Exemples d'aménagements intérieurs et extérieurs"
          >
            <div className="flex flex-col md:flex-row md:divide-x md:divide-borderDefault">
              <div className="flex min-w-0 flex-1 flex-col border-b border-borderDefault md:border-b-0">
                <div className="border-b border-goldBorder/40 bg-goldLight/60 px-4 py-3 text-center font-sans text-[0.8rem] font-black uppercase tracking-[0.08em] text-gold sm:text-[0.82rem]">
                  Aménagements intérieurs
                </div>
                <ul className="list-none space-y-5 px-4 py-5 text-[0.98rem] leading-[1.65] sm:space-y-6 sm:text-[1.05rem]">
                  {travauxInterieur.map((line) => (
                    <li key={line.label} className="flex items-start gap-3.5 sm:gap-4">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-borderDefault bg-white text-[1.15rem] shadow-sm sm:h-10 sm:w-10 sm:text-[1.25rem]"
                        aria-hidden
                      >
                        {line.icon}
                      </span>
                      <span className="pt-1 font-bold text-charcoal">{line.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="border-b border-goldBorder/40 bg-goldLight/60 px-4 py-3 text-center font-sans text-[0.8rem] font-black uppercase tracking-[0.08em] text-gold sm:text-[0.82rem]">
                  Aménagements extérieurs
                </div>
                <ul className="list-none space-y-5 px-4 py-5 text-[0.98rem] leading-[1.65] sm:space-y-6 sm:text-[1.05rem]">
                  {travauxExterieur.map((line) => (
                    <li key={line.label} className="flex items-start gap-3.5 sm:gap-4">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-borderDefault bg-white text-[1.15rem] shadow-sm sm:h-10 sm:w-10 sm:text-[1.25rem]"
                        aria-hidden
                      >
                        {line.icon}
                      </span>
                      <span className="pt-1 font-bold text-charcoal">{line.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
