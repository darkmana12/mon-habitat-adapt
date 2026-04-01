"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Qu'est-ce que MaPrimeAdapt' et qui peut en bénéficier ?",
    a: "MaPrimeAdapt' est une aide de l'État lancée en janvier 2024, financée par l'ANAH. Elle remplace les anciens dispositifs et peut couvrir jusqu'à 70% du coût des travaux d'adaptation pour les ménages modestes. Elle s'adresse aux propriétaires occupants, mais aussi aux locataires sous conditions. Les travaux éligibles incluent la douche à l'italienne, le monte-escalier, les barres d'appui, les élargissements de portes et bien d'autres aménagements.",
  },
  {
    q: "Faut-il obligatoirement un artisan agréé ANAH ?",
    a: "Oui, c'est une condition sine qua non pour obtenir les aides. L'artisan doit posséder le label RGE (Reconnu Garant de l'Environnement) ou Handibat pour les travaux d'adaptation. Vous pouvez vérifier sur le site qualibat.com ou handibat.com. C'est précisément pour cela que nous ne vous mettons en contact qu'avec des professionnels vérifiés.",
  },
  {
    q: "Combien de temps prend le montage d'un dossier ANAH ?",
    a: "Comptez en général 6 à 10 semaines entre le dépôt du dossier complet et la décision de l'ANAH. Il est impératif de NE PAS commencer les travaux avant d'avoir reçu l'accord de financement, sous peine de perdre toute aide. Notre guide détaillé vous explique chaque étape et chaque pièce justificative à fournir.",
  },
  {
    q: "Un locataire peut-il bénéficier de ces aides ?",
    a: "Oui, sous conditions. Le locataire doit obtenir l'accord écrit du propriétaire avant d'entreprendre les travaux. Certaines aides comme l'APA (Allocation Personnalisée d'Autonomie) sont accessibles aux locataires pour les petits équipements. MaPrimeAdapt' est en revanche principalement destinée aux propriétaires, même si des dispositifs complémentaires existent pour les locataires modestes.",
  },
  {
    q: "Ce site est-il payant ? Comment gagnez-vous votre vie ?",
    a: "Tous nos guides et conseils sont 100% gratuits pour vous. Nous sommes rémunérés par les plateformes partenaires (Oui Adapt, Habitissimo) lorsque nous les mettons en relation avec des personnes à la recherche d'artisans. Cette commission est versée par le professionnel, jamais par vous. Cela nous permet de maintenir un service de conseil totalement indépendant et sans frais pour nos lecteurs.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<boolean[]>(() => faqs.map((_, i) => i === 0));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section className="mx-auto max-w-[780px] px-8 py-20">
      <div className="mb-12 text-center">
        <span className="mb-3 block text-[0.78rem] font-medium uppercase tracking-[0.12em] text-sage">Questions fréquentes</span>
        <h2 className="mb-3 font-serif text-[2.4rem]">Vos questions, nos réponses</h2>
      </div>

      {faqs.map((item, i) => (
        <div key={item.q} className="border-b border-borderDefault py-5">
          <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
            onClick={() => toggle(i)}
            aria-expanded={open[i]}
          >
            <h3 className="font-sans text-[0.97rem] font-medium text-charcoal">{item.q}</h3>
            <span className={`shrink-0 text-2xl font-light text-sage transition-transform ${open[i] ? "rotate-45" : ""}`}>+</span>
          </button>
          {open[i] && <div className="pt-3 text-[0.88rem] leading-[1.7] text-textMuted">{item.a}</div>}
        </div>
      ))}
    </section>
  );
}
