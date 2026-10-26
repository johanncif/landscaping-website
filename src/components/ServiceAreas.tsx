import { site } from "@/lib/site";

export function ServiceAreas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-ink py-20 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-water/50 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="flex max-w-xl items-center gap-3 text-4xl leading-tight text-white sm:gap-4 sm:text-5xl">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-10 w-10 shrink-0 text-sky-300 sm:h-12 sm:w-12"
              fill="none"
            >
              <path
                d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9.6" r="2.35" fill="currentColor" />
            </svg>
            SERVICE AREAS
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {site.serviceAreas.map((area, index) => {
            const wide = index > 2;
            return (
              <li
                key={area.name}
                className={`group relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/15 transition hover:-translate-y-1 hover:ring-white/40 ${
                  index % 2 === 0
                    ? "bg-brand/90 hover:bg-brand"
                    : "bg-water/90 hover:bg-water"
                } ${wide ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <span className="font-[family-name:var(--font-heading)] text-5xl font-medium leading-none text-white/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl text-white">{area.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                  {area.region}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  {area.note}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
