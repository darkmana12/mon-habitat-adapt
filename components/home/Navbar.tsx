import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex h-[68px] w-full items-center justify-between border-b border-borderDefault bg-warmWhite px-8">
      <Link href="/" className="flex items-center gap-2.5 font-serif text-xl font-bold text-sageDark no-underline">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage text-lg text-white">
          🏠
        </span>
        Mon Habitat Adapt
      </Link>
      <ul className="flex max-w-[70%] list-none flex-wrap items-center justify-end gap-x-6 gap-y-2 md:max-w-none md:gap-8">
        <li>
          <Link href="#douche" className="text-sm font-bold text-textMuted transition-colors hover:text-sage">
            Douche senior
          </Link>
        </li>
        <li>
          <Link href="#monte" className="text-sm font-bold text-textMuted transition-colors hover:text-sage">
            Monte-escalier
          </Link>
        </li>
        <li>
          <Link href="#maprimeadapt" className="text-sm font-bold text-textMuted transition-colors hover:text-sage">
            Aides & Primes
          </Link>
        </li>
        <li>
          <Link href="#articles" className="text-sm font-bold text-textMuted transition-colors hover:text-sage">
            Guides
          </Link>
        </li>
        <li>
          <Link
            href="#devis"
            className="rounded-md bg-terracotta px-5 py-2.5 text-[0.88rem] font-bold text-white !no-underline transition-colors hover:!bg-terracottaHover"
          >
            Devis gratuit
          </Link>
        </li>
      </ul>
    </nav>
  );
}
