import { QuoteForm } from "@/components/QuoteForm";
import { ServiceAreas } from "@/components/ServiceAreas";
import { services, site } from "@/lib/site";

function PhotoSlot({
  label,
  tone = "green",
}: {
  label: string;
  tone?: "green" | "blue";
}) {
  const base = tone === "blue" ? "bg-water-deep" : "bg-[#0b3d32]";
  const wash =
    tone === "blue"
      ? "radial-gradient(circle at 20% 20%, #2a8fc4 0, transparent 42%), radial-gradient(circle at 80% 70%, #0a4a6e 0, transparent 45%)"
      : "radial-gradient(circle at 20% 20%, #2f9a6a 0, transparent 42%), radial-gradient(circle at 80% 70%, #0d4d3c 0, transparent 45%)";

  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl ${base}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-45"
        style={{ backgroundImage: wash }}
      />
      <div className="relative mx-4 rounded-lg border border-dashed border-white/45 bg-black/25 px-4 py-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Photo placeholder
        </p>
        <p className="mt-1 text-sm font-medium text-white">{label}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    areaServed: site.serviceAreas.map((area) => area.name),
    image: `${site.url}/og-placeholder.svg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-sky-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
          <a
            href="#top"
            className="min-w-0 shrink font-[family-name:var(--font-heading)] text-base tracking-tight text-ink sm:text-lg"
          >
            {site.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
            <a href="#services" className="hover:text-brand">
              Services
            </a>
            <a href="#areas" className="hover:text-water">
              Areas
            </a>
            <a href="#mission" className="hover:text-brand">
              Mission
            </a>
            <a href="#quote" className="hover:text-water">
              Get a quote
            </a>
          </nav>
          <a
            href="#quote"
            className="shrink-0 whitespace-nowrap rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-water"
          >
            Request a quote
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-water">
              Landscaping and pool care, done right
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-tight text-ink sm:text-5xl">
              Choose a crew that treats your yard and pool like a reputation,
              not a route.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              {site.name} handles lawn care, planting, landscape design, and
              pool service for homeowners who want the property to look finished
              — and stay that way. Enter your address and number; we call you
              back with a quote.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex h-12 items-center rounded-lg bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-hover"
              >
                Get a callback quote
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center rounded-lg border border-sky-300 bg-white px-5 text-sm font-semibold text-ink hover:border-water hover:text-water"
              >
                See services
              </a>
            </div>
          </div>
          <PhotoSlot
            tone="blue"
            label="Hero photo of a yard and pool (client will provide)"
          />
        </section>

        <section id="services" className="border-y border-sky-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl text-ink">Work that sells itself</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Green for the grounds, blue for the water. These frames are ready
              for before-and-after photos of real jobs. Drop images into{" "}
              <code className="rounded bg-sky-50 px-1.5 py-0.5 text-sm text-ink">
                public/photos
              </code>{" "}
              when you have them.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="overflow-hidden rounded-2xl bg-page ring-1 ring-sky-200"
                >
                  <PhotoSlot label={service.photoLabel} tone={service.tone} />
                  <div className="p-5">
                    <h3 className="text-xl text-ink">{service.title}</h3>
                    <p className="mt-2 text-muted">{service.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreas />

        <section
          id="mission"
          className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <h2 className="text-3xl text-ink">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/90">
              {site.mission}
            </p>
            <ul className="mt-6 grid gap-2 text-ink/90">
              <li>Show up when we say we will.</li>
              <li>Leave the property cleaner than we found it.</li>
              <li>Quote clearly, then do the work we quoted.</li>
            </ul>
          </div>
          <PhotoSlot tone="green" label="Team or signature project photo" />
        </section>

        <section
          id="quote"
          className="border-t border-sky-900 bg-water-deep py-16 text-white"
        >
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl text-white">Want a quote? We will call you.</h2>
              <p className="mt-4 max-w-md text-sky-100">
                Leave the property address, a number, and an email we can reach.
                No online checkout, no pressure — just a conversation about the
                yard, the pool, and a clear price.
              </p>
              <p className="mt-6 text-sm text-sky-200">
                Prefer to call?{" "}
                <a
                  className="font-semibold text-white underline decoration-sky-300 underline-offset-4"
                  href={site.phoneHref}
                >
                  {site.phoneDisplay}
                </a>
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="bg-[#072a28] px-5 py-8 text-sm text-emerald-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Replace this name, phone,
            and copy with the client’s details.
          </p>
          <p>Landscaping · Pool care · {site.serviceArea}</p>
        </div>
      </footer>
    </>
  );
}
