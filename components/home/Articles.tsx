import Link from "next/link";

const articles = [
  { thumb: "thumb-gold", emoji: "🏛️", tag: "MaPrimeAdapt'", title: "Comment remplir le dossier MaPrimeAdapt' en 2025 (Cerfa + pièces justificatives)", desc: "Le guide complet étape par étape pour ne rien oublier et maximiser votre aide.", meta: "12 min de lecture" },
  { thumb: "thumb-green", emoji: "🚿", tag: "Douche senior", title: "Douche italienne senior : prix 2025, marques et aides disponibles", desc: "Jacob Delafon, Kinedo, Lapeyre... Quel fabricant choisir et pour quel budget ?", meta: "8 min de lecture" },
  { thumb: "thumb-warm", emoji: "🪜", tag: "Monte-escalier", title: "Monte-escalier : coût réel en 2025 et aides pour le financer", desc: "Tout ce que cachent les devis des commerciaux. Notre analyse impartiale.", meta: "10 min de lecture" },
  { thumb: "thumb-green", emoji: "📋", tag: "Aides & primes", title: "Les 7 aides cumulables pour adapter votre salle de bain en 2025", desc: "MaPrimeAdapt', CEE, APA, MDPH... comment les combiner pour payer le moins possible.", meta: "9 min de lecture" },
  { thumb: "thumb-warm", emoji: "🔧", tag: "Travaux", title: "Artisan agréé ANAH : comment le trouver et pourquoi c'est obligatoire", desc: "Sans artisan agréé, pas d'aide. On vous explique comment vérifier les labels Handibat et QB.", meta: "6 min de lecture" },
  { thumb: "thumb-gold", emoji: "📊", tag: "Comparatif", title: "Plafonds de ressources ANAH 2025 : êtes-vous éligible ?", desc: "Tableau complet selon la composition du foyer et la zone géographique.", meta: "5 min de lecture" },
];

const thumbClass: Record<string, string> = {
  "thumb-green": "bg-sageLight",
  "thumb-warm": "bg-terracottaLight",
  "thumb-gold": "bg-goldLight",
};

export function Articles() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 py-20" id="articles">
      <div className="mb-12 text-center">
        <span className="mb-3 block text-[0.78rem] font-medium uppercase tracking-[0.12em] text-sage">Guides & conseils</span>
        <h2 className="mb-3 font-serif text-[2.4rem]">Tout ce que vous devez savoir</h2>
        <p className="mx-auto max-w-[560px] text-[1.05rem] text-textMuted">
          Des articles précis, écrits par des experts, avec les vrais chiffres et les vrais formulaires.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
        {articles.map((a) => (
          <Link
            key={a.title}
            href="#"
            className="group flex flex-col overflow-hidden rounded-[14px] border border-borderDefault bg-white text-inherit no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          >
            <div className={`flex h-40 items-center justify-center text-[3.5rem] ${thumbClass[a.thumb]}`}>{a.emoji}</div>
            <div className="flex flex-1 flex-col px-6 pb-5 pt-5">
              <div className="mb-2 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-terracotta">{a.tag}</div>
              <h3 className="mb-2 font-serif text-[1.05rem] leading-snug text-charcoal">{a.title}</h3>
              <p className="mb-4 flex-1 text-[0.83rem] text-textMuted">{a.desc}</p>
              <div className="flex items-center gap-1.5 text-[0.75rem] text-textLight">📖 {a.meta}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
