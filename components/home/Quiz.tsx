"use client";

import { useCallback, useMemo, useState } from "react";

type Step = 1 | 2 | 3 | "result";

const BIRTH_YEAR_MIN = 1920;

const step1Options = [
  { icon: "🏠", text: "Maison" },
  { icon: "🏢", text: "Appartement" },
];

const step2Options = [
  { icon: "🔑", text: "Propriétaire" },
  { icon: "📋", text: "Locataire" },
];

export function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [dots, setDots] = useState([true, false, false]);
  const [birthYear, setBirthYear] = useState("");

  const birthYearMax = useMemo(() => new Date().getFullYear() - 18, []);

  const birthYearNum = parseInt(birthYear, 10);
  const canFinish =
    !Number.isNaN(birthYearNum) && birthYearNum >= BIRTH_YEAR_MIN && birthYearNum <= birthYearMax;

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

  const selectStep1 = () => {
    goToStep(2);
  };
  const selectStep2 = () => {
    goToStep(3);
  };

  const handleBirthYearSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canFinish) return;
    showResult();
  };

  return (
    <section className="bg-sageLight px-8 py-[70px]" id="quiz">
      <div className="mx-auto max-w-[780px] text-center">
        <div className="mb-3 flex justify-center">
          <span className="inline-flex min-w-[min(100%,22rem)] items-center justify-center rounded-full border border-goldBorder bg-goldLight px-8 py-2 text-[0.95rem] font-bold uppercase tracking-[0.2em] text-gold sm:min-w-[24rem] sm:px-12 sm:py-2.5 sm:text-[1rem] sm:tracking-[0.22em]">
            Simulateur d&apos;aides
          </span>
        </div>
        <h2 className="mb-3 font-sans text-[2.2rem] font-bold leading-[1.2] tracking-tight text-charcoal">
          Combien pouvez-vous obtenir ?
        </h2>
        <p className="mb-10 text-[1.05rem] text-textMuted">
          Répondez à 3 questions pour estimer votre financement MaPrimeAdapt&apos; et recevoir des devis d&apos;artisans
          agréés.
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
              <p className="mb-6 font-sans text-[1.3rem] font-semibold leading-snug text-charcoal">
                Vous habitez en maison ou en appartement ?
              </p>
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
              <p className="mb-6 font-sans text-[1.3rem] font-semibold leading-snug text-charcoal">
                Êtes-vous propriétaire ou locataire ?
              </p>
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
            <form onSubmit={handleBirthYearSubmit}>
              <p className="mb-6 font-sans text-[1.3rem] font-semibold leading-snug text-charcoal">
                Quelle est votre année de naissance ?
              </p>
              <label htmlFor="quiz-birth-year" className="sr-only">
                Année de naissance
              </label>
              <input
                id="quiz-birth-year"
                type="number"
                inputMode="numeric"
                autoComplete="bday-year"
                min={BIRTH_YEAR_MIN}
                max={birthYearMax}
                placeholder="Ex. 1958"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                className="mb-2 w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3.5 font-sans text-[1.05rem] font-medium tabular-nums text-charcoal outline-none transition-colors focus:border-sage"
              />
              <p className="mb-6 text-[0.85rem] text-textMuted">
                Entre {BIRTH_YEAR_MIN} et {birthYearMax}
              </p>
              <button
                type="submit"
                disabled={!canFinish}
                className="w-full cursor-pointer rounded-lg border-0 bg-sage px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-sageDark disabled:cursor-not-allowed disabled:opacity-40"
              >
                Voir mon estimation
              </button>
            </form>
          )}

          {step === "result" && (
            <div className="py-4 text-center">
              <p className="mb-4 text-[0.9rem] text-textMuted">Estimation basée sur vos réponses</p>
              <div className="mb-6 rounded-xl border border-terracottaBorder bg-terracottaLight px-6 py-6">
                <div className="font-sans text-[2.5rem] font-bold tabular-nums text-terracotta">3 500 € – 8 200 €</div>
                <div className="mt-1 text-[0.9rem] text-textMuted">d&apos;aides potentielles (MaPrimeAdapt&apos; + autres)</div>
              </div>
              <p className="mb-6 text-[0.88rem] text-textMuted">
                Recevez un devis gratuit d&apos;artisans agréés ANAH près de chez vous et une estimation précise de vos aides.
              </p>
              <div className="mb-3 grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                <input
                  type="text"
                  className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage"
                  placeholder="Votre prénom"
                  readOnly
                />
                <input
                  type="text"
                  className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage"
                  placeholder="Votre code postal"
                  readOnly
                />
              </div>
              <div className="mb-6 grid grid-cols-1 gap-3 min-[900px]:grid-cols-2">
                <input
                  type="tel"
                  className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage"
                  placeholder="Votre téléphone"
                  readOnly
                />
                <input
                  type="email"
                  className="w-full rounded-lg border-[1.5px] border-borderDefault bg-cream px-4 py-3 font-sans text-[0.9rem] text-charcoal outline-none transition-colors focus:border-sage"
                  placeholder="Votre email"
                  readOnly
                />
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
