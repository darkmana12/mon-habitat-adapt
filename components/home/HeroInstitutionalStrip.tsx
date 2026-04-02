import Image from "next/image";

/** Bandeau logos institutionnels — fichiers dans /public/images/ */
export function HeroInstitutionalStrip() {
  const items = [
    {
      src: "/images/logo_anah.png",
      alt: "ANAH — Agence nationale de l'habitat",
    },
    {
      src: "/images/logo_mon-parcours-handicap.jpg",
      alt: "Mon Parcours Handicap",
    },
    {
      src: "/images/logo_maprimeadapt_transparent.webp",
      alt: "MaPrimeAdapt'",
    },
  ];

  return (
    <div className="mx-auto mt-14 max-w-[900px] border-t border-borderDefault pt-5">
      <p className="mb-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-charcoal sm:text-[0.82rem]">
        Un dispositif soutenu par
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 rounded-full bg-white px-4 py-6 sm:gap-12 sm:px-8 sm:py-7">
        {items.map((item) => (
          <div
            key={item.src}
            className="flex h-20 max-w-[min(100%,280px)] shrink-0 items-center justify-center sm:h-24 sm:max-w-[320px]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={320}
              height={96}
              className="h-16 w-auto max-w-full object-contain object-center sm:h-20"
              sizes="(max-width: 640px) 45vw, 280px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
