export function PrimeBanner() {
  return (
    <div className="bg-gradient-to-br from-gold to-goldDeep px-8 py-5 text-center text-white">
      <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-8">
        <span>🏆</span>
        <strong className="text-[1.05rem]">
          MaPrimeAdapt&apos; 2025 — jusqu&apos;à 70% de financement pour vos travaux d&apos;adaptation
        </strong>
        <span className="text-[0.9rem] opacity-90">
          Aide lancée en 2024, encore très peu connue des seniors
        </span>
        <a
          href="#quiz"
          className="whitespace-nowrap rounded-md bg-white px-[22px] py-2.5 text-[0.88rem] font-medium text-gold no-underline transition-opacity hover:opacity-90"
        >
          Vérifiez vos droits →
        </a>
      </div>
    </div>
  );
}
