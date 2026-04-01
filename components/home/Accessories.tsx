import Link from "next/link";

const items = [
  { icon: "🔧", name: "Barre d'appui inox", price: "Dès 29 €" },
  { icon: "🪑", name: "Siège de douche rabattable", price: "Dès 45 €" },
  { icon: "🔲", name: "Tapis antidérapant", price: "Dès 12 €" },
  { icon: "💡", name: "Veilleuse LED détection", price: "Dès 18 €" },
];

export function Accessories() {
  return (
    <section className="border-y border-borderDefault bg-warmWhite px-8 py-[70px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-0 text-left">
          <span className="mb-3 block text-[0.78rem] font-medium uppercase tracking-[0.12em] text-sage">Accessoires</span>
          <h2 className="mb-3 font-serif text-[2.4rem]">Petits équipements, grand confort</h2>
          <p className="max-w-[500px] text-textMuted">
            Des produits sélectionnés pour leur qualité, disponibles immédiatement sur Amazon. Idéal pour sécuriser en attendant les travaux.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 min-[900px]:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.name}
              href="#"
              className="flex flex-col items-center gap-3 rounded-xl border border-borderDefault bg-white px-6 py-6 text-center text-inherit no-underline transition-all hover:-translate-y-0.5 hover:border-sage"
            >
              <div className="text-[2.2rem]">{item.icon}</div>
              <div className="text-[0.9rem] font-medium text-charcoal">{item.name}</div>
              <div className="text-[0.8rem] text-textMuted">{item.price}</div>
              <div className="text-[0.72rem] font-medium text-[#FF9900]">Voir sur Amazon →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
