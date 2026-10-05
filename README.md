# Greenfield Landscaping (placeholder name)

Marketing site for a landscaping business: services with photo slots, a mission statement, and a quote form (address + phone) so the owner can call interested clients back.

Replace the placeholder business name, phone, and copy in `src/lib/site.ts` once the client confirms details. Drop real photos into `public/photos/` and swap the photo slots in `src/app/page.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quote requests

The form posts to `/api/quote`. Set `QUOTE_WEBHOOK_URL` in `.env.local` (and in Vercel) to a Zapier, Make, Formspree, or Discord webhook so new leads are emailed or messaged to the owner. Without it, submissions are validated and logged on the server.

## Deploy (so Google can find it)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new) (free for this kind of site).
3. Set `NEXT_PUBLIC_SITE_URL` to the live URL (for example `https://your-domain.vercel.app`) and add `QUOTE_WEBHOOK_URL`.
4. Add a custom domain when the client has one.

There is no secret Google keyword that “unlocks” the site. After it is live, people reach it by searching phrases the page is written for, such as:

- landscaping near me
- lawn care
- landscape design
- yard maintenance
- mulch and planting

Once a real city and business name are in the copy, those searches work better. After launch, submit the sitemap (`/sitemap.xml`) in [Google Search Console](https://search.google.com/search-console).
