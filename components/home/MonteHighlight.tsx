import Link from "next/link";

export function MonteHighlight() {
  return (
    <section className="bg-charcoal px-8 py-[70px]">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 min-[900px]:grid-cols-2">
        <div>
          <h2 className="mb-4 font-serif text-[2.4rem] leading-tight text-white">
            Le monte-escalier :<br />
            le <em className="not-italic text-gold">gros lot</em> de l&apos;adaptation
          </h2>
          <p className="mb-8 text-base text-white/70">
            La chute dans les escaliers est le 2ème risque après la salle de bain. Et les devis sont 3 à 5x plus élevés — ce qui signifie des aides plus importantes et des commissions plus grosses pour nos partenaires.
          </p>
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/[0.08] p-5">
              <div className="font-serif text-[1.8rem] font-bold text-gold">3 000 €</div>
              <div className="mt-0.5 text-[0.8rem] text-white/55">prix minimum marché</div>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/[0.08] p-5">
              <div className="font-serif text-[1.8rem] font-bold text-gold">15 000 €</div>
              <div className="mt-0.5 text-[0.8rem] text-white/55">prix haut de gamme</div>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/[0.08] p-5">
              <div className="font-serif text-[1.8rem] font-bold text-gold">50%</div>
              <div className="mt-0.5 text-[0.8rem] text-white/55">pris en charge par les aides</div>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/[0.08] p-5">
              <div className="font-serif text-[1.8rem] font-bold text-gold">72h</div>
              <div className="mt-0.5 text-[0.8rem] text-white/55">délai moyen pour un devis</div>
            </div>
          </div>
          <Link href="#" className="inline-block rounded-lg bg-terracotta px-7 py-3.5 text-[0.95rem] font-medium text-white no-underline transition-colors hover:bg-terracottaHover">
            Obtenir un devis monte-escalier
          </Link>
        </div>

        <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-8">
          <h4 className="mb-5 font-serif text-lg text-white">Checklist avant d&apos;acheter</h4>
          <ul className="list-none">
            <li className="flex items-center gap-2.5 border-b border-white/[0.08] py-2.5 text-[0.9rem] text-white/75">
              <span className="shrink-0 text-base text-[#4CAF50]">✓</span> Mesurer la longueur et courbure des escaliers
            </li>
            <li className="flex items-center gap-2.5 border-b border-white/[0.08] py-2.5 text-[0.9rem] text-white/75">
              <span className="shrink-0 text-base text-[#4CAF50]">✓</span> Vérifier l&apos;éligibilité aux aides ANAH / APA
            </li>
            <li className="flex items-center gap-2.5 border-b border-white/[0.08] py-2.5 text-[0.9rem] text-white/75">
              <span className="shrink-0 text-base text-[#4CAF50]">✓</span> Choisir entre courbe et droite (droite = moins cher)
            </li>
            <li className="flex items-center gap-2.5 border-b border-white/[0.08] py-2.5 text-[0.9rem] text-white/75">
              <span className="shrink-0 text-base text-[#4CAF50]">✓</span> Demander la certification NF Service
            </li>
            <li className="flex items-center gap-2.5 border-b border-white/[0.08] py-2.5 text-[0.9rem] text-white/75">
              <span className="shrink-0 text-base text-[#4CAF50]">✓</span> Vérifier la garantie (minimum 2 ans pièces)
            </li>
            <li className="flex items-center gap-2.5 py-2.5 text-[0.9rem] text-white/75">
              <span className="shrink-0 text-base text-[#4CAF50]">✓</span> Exiger un artisan agréé Handibat ou QB
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-gold px-4 py-3 text-[0.85rem] font-medium text-white">
            🏆 Conseil expert inclus • Devis gratuit sous 48h
          </div>
        </div>
      </div>
    </section>
  );
}
