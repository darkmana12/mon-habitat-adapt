"use client";

import { useCallback, useState } from "react";

type HomeType = "house" | "apartment";
type TenureType = "owner" | "tenant";

const BIRTH_YEAR_MIN = 1920;

export function HeroEligibilityCard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [homeType, setHomeType] = useState<HomeType | null>(null);
  const [tenure, setTenure] = useState<TenureType | null>(null);
  const [birthYear, setBirthYear] = useState("");

  const birthYearMax = new Date().getFullYear() - 18;

  const goToQuiz = useCallback(() => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const canNext1 = homeType !== null;
  const canNext2 = tenure !== null;
  const birthYearNum = parseInt(birthYear, 10);
  const canFinish =
    !Number.isNaN(birthYearNum) && birthYearNum >= BIRTH_YEAR_MIN && birthYearNum <= birthYearMax;

  const progressLabel = `Étape ${step}/3`;

  return (
    <div className="rounded-2xl border border-borderDefault bg-white p-6 shadow-[0_12px_48px_rgba(42,42,40,0.08)] sm:p-8">
      <div className="mb-6">
        <p className="mb-2 text-left font-sans text-sm font-semibold text-goldDeep sm:text-[0.95rem]">{progressLabel}</p>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-[#E8EBEF]"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={3}
          aria-label={`Progression : ${progressLabel}`}
        >
          <div
            className="h-full rounded-full bg-blue-600 transition-[width] duration-300 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div>
          <p className="mb-4 text-center font-sans text-[0.95rem] font-semibold text-charcoal sm:text-base">
            Vous vous renseignez pour :
          </p>
          <div className="mb-6 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
            <button
              type="button"
              onClick={() => setHomeType("house")}
              className={`flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] px-4 py-4 text-center transition-all ${
                homeType === "house"
                  ? "border-sage bg-sageLight/70 shadow-sm"
                  : "border-borderDefault bg-cream/50 hover:border-sage/40 hover:bg-cream"
              }`}
            >
              <span className="text-3xl" aria-hidden>
                🏠
              </span>
              <span className="font-sans text-[0.95rem] font-semibold text-charcoal">Maison</span>
            </button>
            <button
              type="button"
              onClick={() => setHomeType("apartment")}
              className={`flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] px-4 py-4 text-center transition-all ${
                homeType === "apartment"
                  ? "border-sage bg-sageLight/70 shadow-sm"
                  : "border-borderDefault bg-cream/50 hover:border-sage/40 hover:bg-cream"
              }`}
            >
              <span className="text-3xl" aria-hidden>
                🏢
              </span>
              <span className="font-sans text-[0.95rem] font-semibold text-charcoal">Appartement</span>
            </button>
          </div>
          <button
            type="button"
            disabled={!canNext1}
            onClick={() => setStep(2)}
            className={`w-full rounded-lg px-4 py-3.5 font-sans text-[0.95rem] font-semibold text-white transition-all ${
              canNext1
                ? "bg-terracotta shadow-sm hover:-translate-y-px hover:bg-terracottaHover"
                : "cursor-not-allowed bg-borderDefault text-textLight"
            }`}
          >
            Suivant →
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="mb-4 text-center font-sans text-[0.95rem] font-semibold text-charcoal sm:text-base">
            Êtes-vous propriétaire ou locataire ?
          </p>
          <div className="mb-6 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
            <button
              type="button"
              onClick={() => setTenure("owner")}
              className={`flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] px-4 py-4 text-center transition-all ${
                tenure === "owner"
                  ? "border-sage bg-sageLight/70 shadow-sm"
                  : "border-borderDefault bg-cream/50 hover:border-sage/40 hover:bg-cream"
              }`}
            >
              <span className="text-3xl" aria-hidden>
                🔑
              </span>
              <span className="font-sans text-[0.95rem] font-semibold text-charcoal">Propriétaire</span>
            </button>
            <button
              type="button"
              onClick={() => setTenure("tenant")}
              className={`flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-xl border-[1.5px] px-4 py-4 text-center transition-all ${
                tenure === "tenant"
                  ? "border-sage bg-sageLight/70 shadow-sm"
                  : "border-borderDefault bg-cream/50 hover:border-sage/40 hover:bg-cream"
              }`}
            >
              <span className="text-3xl" aria-hidden>
                📋
              </span>
              <span className="font-sans text-[0.95rem] font-semibold text-charcoal">Locataire</span>
            </button>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-row-reverse sm:justify-end">
            <button
              type="button"
              disabled={!canNext2}
              onClick={() => setStep(3)}
              className={`w-full rounded-lg px-4 py-3.5 font-sans text-[0.95rem] font-semibold text-white transition-all sm:w-auto sm:min-w-[160px] ${
                canNext2
                  ? "bg-terracotta shadow-sm hover:-translate-y-px hover:bg-terracottaHover"
                  : "cursor-not-allowed bg-borderDefault text-textLight"
              }`}
            >
              Suivant →
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full rounded-lg border border-borderDefault bg-white px-4 py-3.5 font-sans text-[0.95rem] font-medium text-charcoal transition-colors hover:bg-cream/80 sm:w-auto sm:min-w-[140px]"
            >
              ← Retour
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="mb-2 text-center font-sans text-[0.95rem] font-semibold text-charcoal sm:text-base">
            Quelle est votre année de naissance ?
          </p>
          <p className="mb-4 text-center font-sans text-[0.82rem] leading-relaxed text-textMuted sm:text-[0.85rem]">
            Indication pour orienter les aides et le simulateur.
          </p>
          <div className="mb-6">
            <label htmlFor="hero-birth-year" className="sr-only">
              Année de naissance
            </label>
            <input
              id="hero-birth-year"
              type="number"
              name="birthYear"
              inputMode="numeric"
              autoComplete="bday-year"
              min={BIRTH_YEAR_MIN}
              max={birthYearMax}
              placeholder="Ex. 1955"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value.replace(/\D/g, "").slice(0, 4))}
              className="w-full rounded-xl border border-borderDefault bg-cream/30 px-4 py-3.5 text-center font-sans text-[1.1rem] font-semibold tabular-nums text-charcoal outline-none ring-sage/30 transition-shadow placeholder:font-normal placeholder:text-textLight focus:border-sage focus:ring-2"
            />
            <p className="mt-2 text-center font-sans text-[0.75rem] text-textMuted">
              Entre {BIRTH_YEAR_MIN} et {birthYearMax}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-row-reverse sm:justify-end">
            <button
              type="button"
              disabled={!canFinish}
              onClick={goToQuiz}
              className={`w-full rounded-lg px-4 py-3.5 font-sans text-[0.95rem] font-semibold text-white transition-all sm:w-auto sm:min-w-[200px] ${
                canFinish
                  ? "bg-terracotta shadow-sm hover:-translate-y-px hover:bg-terracottaHover"
                  : "cursor-not-allowed bg-borderDefault text-textLight"
              }`}
            >
              Voir le simulateur →
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full rounded-lg border border-borderDefault bg-white px-4 py-3.5 font-sans text-[0.95rem] font-medium text-charcoal transition-colors hover:bg-cream/80 sm:w-auto sm:min-w-[140px]"
            >
              ← Retour
            </button>
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-[0.8rem] text-textMuted">
        <span className="text-sage">✓</span> Test gratuit et sans engagement
      </p>
    </div>
  );
}
