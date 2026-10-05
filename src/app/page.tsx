import { QuoteForm } from "@/components/QuoteForm";
import { services, site } from "@/lib/site";

function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-emerald-950/90">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #3f7a4c 0, transparent 42%), radial-gradient(circle at 80% 70%, #1f4d32 0, transparent 45%)",
        }}
      />
      <div className="relative mx-4 rounded-lg border border-dashed border-white/40 bg-black/20 px-4 py-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">
          Photo placeholder
        </p>
        <p className="mt-1 text-sm text-white">{label}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    areaServed: site.serviceArea,
    image: `${site.url}/og-placeholder.svg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-stone-200/80 bg-[#fbf8f1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="font-[family-name:var(--font-heading)] text-lg tracking-tight text-emerald-950">
            {site.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 sm:flex">
            <a href="#services" className="hover:text-emerald-800">
              Services
            </a>
            <a href="#mission" className="hover:text-emerald-800">
              Mission
            </a>
            <a href="#quote" className="hover:text-emerald-800">
              Get a quote
            </a>
          </nav>
          <a
            href="#quote"
            className="rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Request a quote
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Local landscaping, done with care
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-tight text-emerald-950 sm:text-5xl">
              Choose a crew that treats your yard like a reputation, not a route.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-600">
              {site.name} handles lawn care, planting, and landscape design for
              homeowners who want the property to look finished — and stay that
              way. Enter your address and number; we call you back with a quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex h-12 items-center rounded-lg bg-emerald-800 px-5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Get a callback quote
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center rounded-lg border border-stone-300 bg-white px-5 text-sm font-semibold text-stone-800 hover:border-emerald-700"
              >
                See services
              </a>
            </div>
          </div>
          <PhotoSlot label="Hero photo of a completed yard (client will provide)" />
        </section>

        <section id="services" className="border-y border-stone-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl text-emerald-950">Work that sells itself</h2>
            <p className="mt-3 max-w-2xl text-stone-600">
              These frames are ready for before-and-after photos of real jobs.
              Drop images into{" "}
              <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
                public/photos
              </code>{" "}
              when you have them.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="overflow-hidden rounded-2xl bg-[#f6f3ec] ring-1 ring-stone-200"
                >
                  <PhotoSlot label={service.photoLabel} />
                  <div className="p-5">
                    <h3 className="text-xl text-emerald-950">{service.title}</h3>
                    <p className="mt-2 text-stone-600">{service.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl text-emerald-950">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-700">
              {site.mission}
            </p>
            <ul className="mt-6 grid gap-2 text-stone-700">
              <li>Show up when we say we will.</li>
              <li>Leave the property cleaner than we found it.</li>
              <li>Quote clearly, then do the work we quoted.</li>
            </ul>
          </div>
          <PhotoSlot label="Team or signature project photo" />
        </section>

        <section id="quote" className="border-t border-stone-200 bg-emerald-950 py-16 text-emerald-50">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl text-white">Want a quote? We will call you.</h2>
              <p className="mt-4 max-w-md text-emerald-100/90">
                Leave the property address and a number we can reach. No online
                checkout, no pressure — just a conversation about the yard and
                a clear price.
              </p>
              <p className="mt-6 text-sm text-emerald-200/80">
                Prefer to call?{" "}
                <a className="underline decoration-emerald-400 underline-offset-4" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="bg-[#1c2d1c] px-5 py-8 text-sm text-emerald-100/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Replace this name, phone,
            and copy with the client’s details.
          </p>
          <p>Lawn care · Landscape design · {site.serviceArea}</p>
        </div>
      </footer>
    </>
  );
}
