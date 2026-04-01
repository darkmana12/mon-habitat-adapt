"use client";

import { useCallback, useState } from "react";

type Step = 1 | 2 | 3 | "result";

const step1Options = [
  { icon: "🚿", text: "Douche à l'italienne / remplacement baignoire" },
  { icon: "🪜", text: "Monte-escalier" },
  { icon: "🚪", text: "Accessibilité (rampe, porte, couloir)" },
  { icon: "🏠", text: "Plusieurs travaux d'adaptation" },
];

const step2Options = [
  { icon: "🔵", text: "Modestes (moins de 22 000 €/an)" },
  { icon: "🟡", text: "Intermédiaires (22 000 – 30 000 €/an)" },
  { icon: "🟠", text: "Supérieurs à 30 000 €/an" },
  { icon: "❓", text: "Je ne sais pas exactement" },
];

const step3Options = [
  { icon: "✅", text: "Oui, propriétaire occupant" },
  { icon: "🏢", text: "Non, locataire" },
  { icon: "👨‍👩‍👧", text: "Logement d'un proche" },
  { icon: "❓", text: "Autre situation" },
];

export function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [dots, setDots] = useState([true, false, false]);

  const goToStep = useCallback((next: 2 | 3) => {
    setTimeout(() => {
      setStep(next);
      setDots((d) => {
        const nextDots = [...d];
        nextDots[next - 1] = true;
        return nextDots;
      });
    }, 300);
  }, []);

  const showResult = useCallback(() => {
    setTimeout(() => {
      setStep("result");
      setDots([true, true, true]);
    }, 300);
  }, []);

  const selectStep1 = () => { goToStep(2); };
  const selectStep2 = () => {
    goToStep(3);
  };
  const selectStep3 = () => {
    showResult();
  };

  return (
    <section className="bg-sageLight px-8 py-[70px]" id="quiz">
      <div className="mx-auto max-w-[780px] text-center">
        <span className="mb-3 block text-[0.88rem] font-medium uppercase tracking-[0.12em] text-sage sm:text-[0.92rem]">
          Simulateur d&apos;aides
        </span>
        <h2 className="mb-3 font-serif text-[2.2rem] text-charcoal">Combien pouvez-vous obtenir ?</h2>
        <p className="mb-10 text-[1.05rem] text-textMuted">
          Répondez à 3 questions pour estimer votre financement MaPrimeAdapt&apos; et recevoir des devis d&apos;artisans agréés.
        </p>

        <div className="rounded-2xl border border-borderDefault bg-white p-10 text-left">
          <div className="mb-6 flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-sm transition-colors ${dots[i] ? "bg-sage" : "bg-borderDefault"}`}
              />
            ))}
          </div>

          {step === 1 && (
            <div>
              <p className="mb-6 font-serif text-[1.3rem] text-charcoal">Quel type de travaux vous intéresse ?</p>
              <div className="grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                {step1Options.map((opt) => (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={selectStep1}
                    className="flex min-h-[5.75rem] w-full cursor-pointer items-center gap-3 rounded-[10px] border-[1.5px] border-borderDefault bg-cream px-4 py-3 text-left transition-all hover:border-sage hover:bg-sageLight"
                  >
                    <span className="shrink-0 text-2xl">{opt.icon}</span>
                    <span className="text-[0.9rem] font-medium leading-snug text-charcoal">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="mb-6 font-serif text-[1.3rem] text-charcoal">Quel est votre niveau de revenus approximatif ?</p>
              <div className="grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                {step2Options.map((opt) => (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={selectStep2}
                    className="flex min-h-[5.75rem] w-full cursor-pointer items-center gap-3 rounded-[10px] border-[1.5px] border-borderDefault bg-cream px-4 py-3 text-left transition-all hover:border-sage hover:bg-sageLight"
                  >
                    <span className="shrink-0 text-2xl">{opt.icon}</span>
                    <span className="text-[0.9rem] font-medium leading-snug text-charcoal">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="mb-6 font-serif text-[1.3rem] text-charcoal">Êtes-vous propriétaire de votre logement ?</p>
              <div className="grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                {step3Options.map((opt) => (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={selectStep3}
                    className="flex min-h-[5.75rem] w-full cursor-pointer items-center gap-3 rounded-[10px] border-[1.5px] border-borderDefault bg-cream px-4 py-3 text-left transition-all hover:border-sage hover:bg-sageLight"
                  >
                    <span className="shrink-0 text-2xl">{opt.icon}</span>
                    <span className="text-[0.9rem] font-medium leading-snug text-charcoal">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "result" && (
            <div className="py-4 text-center">
              <p className="mb-4 text-[0.9rem] text-textMuted">Estimation basée sur vos réponses</p>
              <div className="mb-6 rounded-xl border border-terracottaBorder bg-terracottaLight px-6 py-6">
                <div className="font-serif text-[2.5rem] font-bold text-terracotta">3 500 € – 8 200 €</div>
                <div className="mt-1 text-[0.9rem] text-textMuted">d&apos;aides potentielles (MaPrimeAdapt&apos; + autres)</div>
              </div>
              <p className="mb-6 text-[0.88rem] text-textMuted">
                Recevez un devis gratuit d&apos;artisans agréés ANAH près de chez vous et une estimation précise de vos aides.
              </p>
              <div className="mb-3 grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                <input type="text" className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage" placeholder="Votre prénom" readOnly />
                <input type="text" className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage" placeholder="Votre code postal" readOnly />
              </div>
              <div className="mb-6 grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                <input type="tel" className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage" placeholder="Votre téléphone" readOnly />
                <input type="email" className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage" placeholder="Votre email" readOnly />
              </div>
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg border-0 bg-terracotta px-4 py-4 text-base font-medium text-white transition-colors hover:bg-terracottaHover"
              >
                Recevoir mes devis gratuits →
              </button>
              <p className="mt-3 text-[0.75rem] text-textLight">
                🔒 Vos données sont confidentielles. Zéro spam. Devis sous 48h.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


